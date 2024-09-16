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
          Diabetes Risk Assessment
        </h1>
        <p className="text-[#A2A3A6] font-light text-lg py-2 pb-10">
          This questionnaire is to assess your diabetes risk level and recommends
          appropriate actions.{" "}
        </p>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8  ">
            {/* Age */}

            <RadioFormField
              name="age"
              label="1. Are you 45 years old or older?"
              control={form.control}
              options={[
                { value: "yes", label: "Yes" },
                { value: "no", label: "No" },
              ]}
            />

            {/* height */}
            <div className="grid grid-cols-2  gap-2">
              <TextFormField
                name="feet"
                control={form.control}
                label="2. Height"
                placeholder="Feet"
                type="number"
              />

              <TextFormField
                name="inches"
                control={form.control}
                label="2. Height"
                placeholder="Inches"
                type="number"
                className="invisible"
              />
            </div>

            {/* weight */}
            <TextFormField
              name="weight"
              control={form.control}
              label="3. Weight"
              placeholder="kgs"
              type="number"
            />

            {/* gender */}
            <RadioFormField
              name="gender"
              label="4. Are you"
              control={form.control}
              options={[
                { value: "male", label: "Male" },
                { value: "female", label: "Female" },
              ]}
            />

            <RadioFormField
              name="parent"
              label="5. Do either of your natural parents, or any of your blood-related brothers or sisters, have diabetes?"
              control={form.control}
              options={[
                { value: "yes", label: "Yes" },
                { value: "no", label: "No" },
              ]}
            />

            <RadioFormField
              name="sedentary"
              label="6. Are you sedentary?"
              control={form.control}
              options={[
                { value: "yes", label: "Yes" },
                { value: "no", label: "No" },
              ]}
            />
            <RadioFormField
              name="background"
              label="7. Is your family background African American, American Indian, Asian American, Pacific Islander, or Hispanic American/Latino?"
              control={form.control}
              options={[
                { value: "yes", label: "Yes" },
                { value: "no", label: "No" },
              ]}
            />

            <RadioFormField
              name="imapired"
              label="8. Have you ever been told that you had “impaired glucose tolerance (IGT),” or “impaired fasting glucose (IFG)”? (A glucose tolerance test measures your blood sugar 2 hours after ingesting a standard amount of glucose. A fasting glucose test measures your blood glucose after you have gone at least 8 hours without eating. If you had one of these tests, and it showed your blood sugar was high, you may have been told that you have “prediabetes.”)"
              control={form.control}
              options={[
                { value: "yes", label: "Yes" },
                { value: "no", label: "No" },
              ]}
            />

            <RadioFormField
              name="bp"
              label="9. Have you been diagnosed with high blood pressure?"
              control={form.control}
              options={[
                { value: "yes", label: "Yes" },
                { value: "no", label: "No" },
              ]}
            />
            <RadioFormField
              name="hdl"
              label={`10. Have you ever been told that your HDL ("good") cholesterol was too low (40 in men or 50 in women mg/dl or lower) or that your triglyceride level was too high (1501( (50mg/dl or more)?`}
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
