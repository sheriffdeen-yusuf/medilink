'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import RadioFormField from '@/components/RadioFormField';
import TextFormField from '@/components/TextFormField';
import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import Link from 'next/link';

const formSchema = z.object({
  age: z.enum(['yes', 'no']),
  weight: z.string().min(2).max(3),
  feet: z.string().min(2),
  inches: z.string().min(2),
  gender: z.enum(['male', 'female']),
  parent: z.enum(['yes', 'no']),
  sedentary: z.enum(['yes', 'no']),
  background: z.enum(['yes', 'no']),
  imapired: z.enum(['yes', 'no']),
  bp: z.enum(['yes', 'no']),
  hdl: z.enum(['yes', 'no']),
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
          Hypertension Risk Assessment
        </h1>
        <p className="text-[#A2A3A6] font-light text-lg py-2 pb-10">
          This questionnaire is to assess your hypertension risk level and recommends
          appropriate actions.{' '}
        </p>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8  ">
            {/* Age */}

            <RadioFormField
              name="age"
              label="1. Are you 35 years old or older?"
              control={form.control}
              options={[
                { value: 'yes', label: 'Yes' },
                { value: 'no', label: 'No' },
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
              name="famHistory"
              label="4. Do you have a family history of hypertension?"
              control={form.control}
              options={[
                { value: 'yes', label: 'Yes' },
                { value: 'no', label: 'No' },
              ]}
            />

            <RadioFormField
              name="smoke"
              label="5. Do you currently smoke, or have you ever been a regular smoker in the past? (Smoking damages the blood vessels and can raise your blood pressure over time.)"
              control={form.control}
              options={[
                { value: 'yes', label: 'Yes' },
                { value: 'no', label: 'No' },
              ]}
            />

            <RadioFormField
              name="alcohol"
              label="6. Do you consume alcohol more than twice a week?"
              control={form.control}
              options={[
                { value: 'yes', label: 'Yes' },
                { value: 'no', label: 'No' },
              ]}
            />
            <RadioFormField
              name="background"
              label="7. How often do you consume foods high in salt, such as processed meats, canned goods, or fast foods? (High salt intake increases blood pressure by causing the body to retain water.)"
              control={form.control}
              options={[
                { value: 'rarely', label: 'Rarely' },
                { value: 'cccasionally', label: 'Occasionally' },
                { value: 'frequently', label: 'Frequently' },
              ]}
            />

            <RadioFormField
              name="imapired"
              label="8. Do you exercise regularly at least 3 times per week(Regular physical activity helps manage blood pressure)? "
              control={form.control}
              options={[
                { value: 'yes', label: 'Yes' },
                { value: 'no', label: 'No' },
              ]}
            />

            <RadioFormField
              name="bp"
              label="9. Have you experienced any symptoms such as shortness of breath, chest pain, or irregular heartbeats recently? (These symptoms may indicate high blood pressure or heart-related issues.)"
              control={form.control}
              options={[
                { value: 'yes', label: 'Yes' },
                { value: 'no', label: 'No' },
              ]}
            />
            <RadioFormField
              name="hdl"
              label="10. Have you been diagnosed with any other chronic conditions such as diabetes or kidney disease? (These conditions are often related to hypertension and increase the risk of complications.)"
              control={form.control}
              options={[
                { value: 'yes', label: 'Yes' },
                { value: 'no', label: 'No' },
              ]}
            />

            {/*  */}
            <div className="flex justify-between items-center">
              <Link href="/">
                <Button variant="outline">Back</Button>
              </Link>
              <Button type="submit" className="bg-[#2A3390]  md:px-6 px-1">
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
