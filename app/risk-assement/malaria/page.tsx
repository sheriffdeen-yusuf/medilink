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
          Malaria Risk Assessment
        </h1>
        <p className="text-[#A2A3A6] font-light text-lg py-2 pb-10">
          This questionnaire is to assess your malaria risk level and recommends
          appropriate actions.{" "}
        </p>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8  ">
            {/* Age */}

            <RadioFormField
              name="age"
              label="1. Have you recently traveled to or live in a malaria-endemic area (This determines your exposure to malaria risk areas.)?"
              control={form.control}
              options={[
                { value: "yes", label: "Yes" },
                { value: "no", label: "No" },
              ]}
            />

            <RadioFormField
              name="preg"
              label="2. Do you frequently experience symptoms such as fever, chills, or excessive sweating, particularly in the evenings or at night? (These are common symptoms of malaria.)"
              control={form.control}
              options={[
                { value: "yes", label: "Yes" },
                { value: "no", label: "No" },
              ]}
            />

            {/* weight */}
            <RadioFormField
              name="famHistory"
              label="3. Have you been diagnosed with malaria in the past, and how often do you experience relapses? (Past malaria infections increase the risk of recurring malaria.)"
              control={form.control}
              options={[
                { value: "yes", label: "Yes" },
                { value: "no", label: "No" },
              ]}
            />

            <RadioFormField
              name="famHistory"
              label="4. Do you consistently use a mosquito net or other forms of protection (e.g., insect repellent) while sleeping? (Using a net is an effective prevention method against mosquito bites.)"
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
              label="6. Are you currently taking malaria prophylaxis (preventive medication) if you live in or travel to high-risk areas? (Preventive measures reduce the risk of contracting malaria.)"
              control={form.control}
              options={[
                { value: "yes", label: "Yes" },
                { value: "no", label: "No" },
              ]}
            />
            <RadioFormField
              name="background"
              label="7. Have you experienced recent headaches, muscle pain, or nausea? (These are symptoms commonly associated with malaria.)"
              control={form.control}
              options={[
                { value: "yes", label: "Yes" },
                { value: "no", label: "No" },
              ]}
            />

            <RadioFormField
              name="imapired"
              label="8. Do you notice any loss of appetite, unexplained fatigue, or general malaise in your day-to-day life? (These are less obvious but still common signs of malaria.)"
              control={form.control}
              options={[
                { value: "yes", label: "Yes" },
                { value: "no", label: "No" },
              ]}
            />

            <RadioFormField
              name="bp"
              label="9. Do you live or spend a significant amount of time near stagnant water sources, which are breeding grounds for mosquitoes? (Proximity to mosquito habitats increases malaria risk.)"
              control={form.control}
              options={[
                { value: "yes", label: "Yes" },
                { value: "no", label: "No" },
              ]}
            />
            <RadioFormField
              name="hdl"
              label="10. Do you have easy access to healthcare or malaria treatment in case of symptoms? (Access to medical care is crucial for early diagnosis and treatment of malaria.)"
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
