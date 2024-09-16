"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import RadioFormField from "@/components/RadioFormField";
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
          Breast Cancer Risk Assessment
        </h1>
        <p className="text-[#A2A3A6] font-light text-lg py-2 pb-10">
          This questionnaire is to assess your Breast Cancer risk level and
          recommends appropriate actions.{" "}
        </p>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8  ">
            {/* Age */}

            <RadioFormField
              name="age"
              label="1. Are you 40 years old or older? (Age is one of the primary risk factors for breast cancer, with risk increasing as you get older.)"
              control={form.control}
              options={[
                { value: "yes", label: "Yes" },
                { value: "no", label: "No" },
              ]}
            />

            <RadioFormField
              name="preg"
              label="2. Do you have close relatives (mother, sister, aunt) who have been diagnosed with breast cancer or ovarian cancer? (A family history of cancer significantly increases your risk.)"
              control={form.control}
              options={[
                { value: "yes", label: "Yes" },
                { value: "no", label: "No" },
              ]}
            />

            {/* weight */}
            <RadioFormField
              name="famHistory"
              label="3. Have you noticed any unusual changes in the size or shape of your breasts, such as swelling, dimpling, or redness? (Breast changes can be early signs of breast cancer.)"
              control={form.control}
              options={[
                { value: "yes", label: "Yes" },
                { value: "no", label: "No" },
              ]}
            />

            <RadioFormField
              name="famHistory"
              label="4. Have you undergone a mammogram in the past two years? (Regular mammograms are key to early detection of breast cancer.)"
              control={form.control}
              options={[
                { value: "yes", label: "Yes" },
                { value: "no", label: "No" },
              ]}
            />

            <RadioFormField
              name="smoke"
              label="5. Do you frequently experience pain, tenderness, or detect any lumps in your breasts, especially in one area? (Persistent lumps or discomfort could indicate a potential problem.)"
              control={form.control}
              options={[
                { value: "yes", label: "Yes" },
                { value: "no", label: "No" },
              ]}
            />

            <RadioFormField
              name="alcohol"
              label="6. Did you begin menstruating before the age of 12? (Early menstruation is linked to a higher lifetime exposure to estrogen, which increases breast cancer risk.)"
              control={form.control}
              options={[
                { value: "yes", label: "Yes" },
                { value: "no", label: "No" },
              ]}
            />
            <RadioFormField
              name="background"
              label="7. Have you ever used hormone replacement therapy (HRT) to manage menopausal symptoms, and if so, for how long? (Prolonged use of HRT can increase breast cancer risk.)"
              control={form.control}
              options={[
                { value: "yes", label: "Yes" },
                { value: "no", label: "No" },
              ]}
            />

            <RadioFormField
              name="imapired"
              label="8. Have you noticed any discharge from your nipples that is not related to breastfeeding, or changes in the nipple, such as inversion? (Nipple changes can be a sign of breast cancer.)"
              control={form.control}
              options={[
                { value: "yes", label: "Yes" },
                { value: "no", label: "No" },
              ]}
            />

            <RadioFormField
              name="bp"
              label="9. Are you considered overweight or obese based on your BMI? (Being overweight, especially after menopause, increases the risk of breast cancer.)"
              control={form.control}
              options={[
                { value: "yes", label: "Yes" },
                { value: "no", label: "No" },
              ]}
            />
            <RadioFormField
              name="hdl"
              label="10. How often do you engage in physical activity (at least 30 minutes a day)? (Regular exercise helps reduce the risk of breast cancer.)"
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
