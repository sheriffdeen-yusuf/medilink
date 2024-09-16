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
          Cardiovascular Disease Risk Assessment
        </h1>
        <p className="text-[#A2A3A6] font-light text-lg py-2 pb-10">
          This questionnaire is to assess your Cardiovascular Disease risk level and
          recommends appropriate actions.{" "}
        </p>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8  ">
            {/* Age */}

            <RadioFormField
              name="age"
              label="1. Are you 50 years old or older? (Cardiovascular disease risk increases with age, particularly after 50.)
"
              control={form.control}
              options={[
                { value: "yes", label: "Yes" },
                { value: "no", label: "No" },
              ]}
            />

            <RadioFormField
              name="preg"
              label="2. Do you have a family history of heart disease, stroke, or other cardiovascular conditions? (Family history plays a large role in determining your risk.)"
              control={form.control}
              options={[
                { value: "yes", label: "Yes" },
                { value: "no", label: "No" },
              ]}
            />

            {/* weight */}
            <RadioFormField
              name="famHistory"
              label="3. What is your current weight (in kg)? (Obesity is a major risk factor for cardiovascular disease.)"
              control={form.control}
              options={[
                { value: "yes", label: "Yes" },
                { value: "no", label: "No" },
              ]}
            />

            <RadioFormField
              name="famHistory"
              label="4. Do you currently smoke, or have you smoked regularly in the past? (Smoking significantly increases the risk of heart disease.)"
              control={form.control}
              options={[
                { value: "yes", label: "Yes" },
                { value: "no", label: "No" },
              ]}
            />

            <RadioFormField
              name="smoke"
              label="5. Have you been diagnosed with high cholesterol by a healthcare professional? (High cholesterol contributes to the development of heart disease.)"
              control={form.control}
              options={[
                { value: "yes", label: "Yes" },
                { value: "no", label: "No" },
              ]}
            />

            <RadioFormField
              name="alcohol"
              label="6. Have you been diagnosed with high blood pressure (over 140/90 mmHg)? (Hypertension is a leading risk factor for cardiovascular diseases such as heart attack and stroke.)"
              control={form.control}
              options={[
                { value: "yes", label: "Yes" },
                { value: "no", label: "No" },
              ]}
            />
            <RadioFormField
              name="background"
              label="7. How many times per week do you engage in physical exercise, including walking, jogging, or other forms of physical activity? (Regular exercise reduces the risk of cardiovascular disease.)"
              control={form.control}
              options={[
                { value: "yes", label: "Yes" },
                { value: "no", label: "No" },
              ]}
            />

            <RadioFormField
              name="imapired"
              label="8. Have you recently experienced chest pain, shortness of breath, or rapid heartbeats? (These symptoms could indicate a heart condition or other cardiovascular issues.)"
              control={form.control}
              options={[
                { value: "yes", label: "Yes" },
                { value: "no", label: "No" },
              ]}
            />

            <RadioFormField
              name="bp"
              label="9. Do you consume a diet high in unhealthy fats, processed foods, and low in fruits and vegetables? (Diet is an important modifiable risk factor for heart disease.)"
              control={form.control}
              options={[
                { value: "yes", label: "Yes" },
                { value: "no", label: "No" },
              ]}
            />
            <RadioFormField
              name="hdl"
              label="10. Have you been diagnosed with diabetes or prediabetes? (Diabetes increases the risk of heart disease and stroke.)"
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
