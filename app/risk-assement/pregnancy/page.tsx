"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import RadioFormField from "@/components/RadioFormField";
import TextFormField from "@/components/TextFormField";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import Link from "next/link";

const formSchema = z.object({
  age: z.enum(["yes", "no"]),
  weight: z.string().min(2).max(3),
  feet: z.string().min(2),
  inches: z.string().min(2),
  gender: z.enum(["male", "female"]),
  parent: z.enum(["yes", "no"]),
  sedentary: z.enum(["yes", "no"]),
  background: z.enum(["yes", "no"]),
  imapired: z.enum(["yes", "no"]),
  bp: z.enum(["yes", "no"]),
  hdl: z.enum(["yes", "no"]),
});

const Page = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      // weight: "0",
      // age: true,
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };

  return (
    <div className=" py-14 w-full">
      <div className="max-w-[70%] mx-auto bg-gray-100 p-10 rounded-3xl">
        <h1 className="text-[#282828] text-4xl font-semibold">
          Pregnancy Risk Assessment
        </h1>
        <p className="text-[#A2A3A6] font-light text-lg py-2 pb-10">
          This questionnaire is to assess your pregnancy risk level and recommends
          appropriate actions.{" "}
        </p>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8  ">
            {/* Age */}

            <RadioFormField
              name="age"
              label="1. Are you 35 years old or older at the time of pregnancy? (Advanced maternal age increases the risk of complications during pregnancy, including gestational diabetes and preeclampsia.)"
              control={form.control}
              options={[
                { value: "yes", label: "Yes" },
                { value: "no", label: "No" },
              ]}
            />

            <RadioFormField
              name="preg"
              label="2. During previous pregnancies, were you ever diagnosed with gestational diabetes? (Gestational diabetes in a previous pregnancy increases your risk of developing it again.)"
              control={form.control}
              options={[
                { value: "yes", label: "Yes" },
                { value: "no", label: "No" },
              ]}
            />

            {/* weight */}
            <TextFormField
              name="weight"
              control={form.control}
              label="3. What was your pre-pregnancy weight (in kg)? (Pre-pregnancy weight helps determine your BMI, which can influence pregnancy risk factors.)t"
              placeholder="kgs"
              type="number"
            />

            {/* gender */}
            <RadioFormField
              name="famHistory"
              label="4. Do you have a family history of hypertension?"
              control={form.control}
              options={[
                { value: "yes", label: "Yes" },
                { value: "no", label: "No" },
              ]}
            />

            <RadioFormField
              name="smoke"
              label="5. Have you experienced high blood pressure during this or any previous pregnancy? (High blood pressure during pregnancy can indicate a risk of preeclampsia, a serious pregnancy complication.)"
              control={form.control}
              options={[
                { value: "yes", label: "Yes" },
                { value: "no", label: "No" },
              ]}
            />

            <RadioFormField
              name="alcohol"
              label="6. Do you have any family history of pregnancy complications, such as preeclampsia, gestational diabetes, or miscarriages? (Family history can indicate a higher risk of pregnancy-related issues.)"
              control={form.control}
              options={[
                { value: "yes", label: "Yes" },
                { value: "no", label: "No" },
              ]}
            />
            <RadioFormField
              name="background"
              label="7. Have you recently experienced sudden swelling in your hands or feet, headaches, or changes in vision (blurred vision or light sensitivity)? (These may be warning signs of preeclampsia.)"
              control={form.control}
              options={[
                { value: "yes", label: "Yes" },
                { value: "no", label: "No" },
              ]}
            />

            <RadioFormField
              name="imapired"
              label="8. How many previous pregnancies have you had, and were there any complications in previous deliveries? (Knowing about past pregnancies helps assess your overall risk.)"
              control={form.control}
              options={[
                { value: "yes", label: "Yes" },
                { value: "no", label: "No" },
              ]}
            />

            <RadioFormField
              name="bp"
              label="9. Have you experienced extreme fatigue, shortness of breath, or chest pain during your pregnancy? (These could be symptoms of anemia, high blood pressure, or other pregnancy-related issues.)"
              control={form.control}
              options={[
                { value: "yes", label: "Yes" },
                { value: "no", label: "No" },
              ]}
            />
            <RadioFormField
              name="hdl"
              label="10. Have you smoked or consumed alcohol at any point during your pregnancy? (Smoking and alcohol use can lead to premature birth, low birth weight, and developmental problems.)"
              control={form.control}
              options={[
                { value: "yes", label: "Yes" },
                { value: "no", label: "No" },
              ]}
            />

            {/*  */}
            <div className="flex justify-between items-center">
              <Link href="/">
                <Button variant="outline">Back</Button>
              </Link>
              <Button type="submit" size="lg" className="bg-[#2A3390]">
                Submit and Get Instant Results
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default Page;
