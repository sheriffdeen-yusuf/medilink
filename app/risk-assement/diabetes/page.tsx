'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import RadioFormField from '@/components/RadioFormField';
import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import Link from 'next/link';
import { PulseLoader } from 'react-spinners';
import { useState } from 'react';
import { secureAxiosInstance } from '@/services/axios';
import Toast from '@/lib/Toast';

const formSchema = z.object({
  age: z.enum(['yes', 'no']),
  family_history: z.enum(['yes', 'no']),
  obesity: z.enum(['yes', 'no']),
  test_gestational: z.enum(['yes', 'no']),
  freq_thirst: z.enum(['yes', 'no']),
  high_blood_pressure: z.enum(['yes', 'no']),
  freq_excercise: z.enum(['yes', 'no']),
  test_prediabetes: z.enum(['yes', 'no']),
  consume_sugary: z.enum(['yes', 'no']),
  test_low_HDL: z.enum(['yes', 'no']),
});

const Page = () => {
  const [isLoading, setIsLoading] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    const payload = {
      ...values,
    };

    setIsLoading(true);
    secureAxiosInstance
      .post(`/stratification/diabetes`, payload)
      .then((response) => {
        Toast.fire({
          icon: 'success',
          title: response?.data?.message,
          background: '#008000',
        });
        console.log(response);
        form.reset();
      })
      .catch((error) => {
        Toast.fire({
          icon: 'error',
          title: error?.response?.data?.message || error?.message,
          background: '#D84646',
        });
        console.error('Error while submitting:', error);
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <div className=" py-14 w-full">
      <div className="max-w-[70%] mx-auto bg-gray-100 p-10 rounded-3xl">
        <h1 className="text-[#282828] text-4xl font-semibold">
          Diabetes Risk Assessment
        </h1>
        <p className="text-[#A2A3A6] font-light text-lg py-2 pb-10">
          This questionnaire is to assess your diabetes risk level and recommends
          appropriate actions.{' '}
        </p>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8  ">
            {/* Age */}

            <RadioFormField
              name="age"
              label="1. Are you 45 years old or older? (This is a critical factor as the risk of developing Type 2 diabetes increases with age.)"
              control={form.control}
              options={[
                { value: 'yes', label: 'Yes' },
                { value: 'no', label: 'No' },
              ]}
            />

            <RadioFormField
              name="family_history"
              label="2. Do you have any family members (parents, siblings) who have been diagnosed with diabetes? (Family history plays a major role in determining your risk of developing diabetes.)"
              control={form.control}
              options={[
                { value: 'yes', label: 'Yes' },
                { value: 'no', label: 'No' },
              ]}
            />

            {/* weight Is your current weight >= 70 (in kg)? */}
            <RadioFormField
              name="obesity"
              label="3. Is your current weight >= 70 (in kg)? (Your weight, combined with height, is important for assessing obesity or overweight status, which increases the risk of diabetes.)"
              control={form.control}
              options={[
                { value: 'yes', label: 'Yes' },
                { value: 'no', label: 'No' },
              ]}
            />

            {/* gender */}
            <RadioFormField
              name="freq_excercise"
              label="4. Do You often engage in physical exercise, such as walking, jogging, or other forms of activity? (Include activities that last at least 30 minutes daily or more.) (Physical activity helps lower blood sugar levels and can reduce diabetes risk.)"
              control={form.control}
              options={[
                { value: 'yes', label: 'Yes' },
                { value: 'no', label: 'No' },
              ]}
            />

            <RadioFormField
              name="high_blood_pressure"
              label="5. Has your doctor ever diagnosed you with high blood pressure, defined as blood pressure above 140/90 mmHg? (High blood pressure is often linked to diabetes and heart problems.)"
              control={form.control}
              options={[
                { value: 'yes', label: 'Yes' },
                { value: 'no', label: 'No' },
              ]}
            />

            <RadioFormField
              name="test_gestational"
              label="6. For women, were you ever diagnosed with gestational diabetes (diabetes during pregnancy)? (Women with gestational diabetes are at higher risk for developing Type 2 diabetes later in life.)?"
              control={form.control}
              options={[
                { value: 'yes', label: 'Yes' },
                { value: 'no', label: 'No' },
              ]}
            />
            <RadioFormField
              name="freq_thirst"
              label="7. Do you frequently feel excessively thirsty or have the urge to urinate more often than usual? (These are common symptoms of high blood sugar levels.)"
              control={form.control}
              options={[
                { value: 'yes', label: 'Yes' },
                { value: 'no', label: 'No' },
              ]}
            />

            <RadioFormField
              name="test_prediabetes"
              label="8. Have you ever been told that you had “impaired glucose tolerance (IGT),” or “impaired fasting glucose (IFG)”? (A glucose tolerance test measures your blood sugar 2 hours after ingesting a standard amount of glucose. A fasting glucose test measures your blood glucose after you have gone at least 8 hours without eating. If you had one of these tests, and it showed your blood sugar was high, you may have been told that you have “prediabetes.”)"
              control={form.control}
              options={[
                { value: 'yes', label: 'Yes' },
                { value: 'no', label: 'No' },
              ]}
            />

            <RadioFormField
              name="consume_sugary"
              label="9. How often do you consume sugary beverages or foods such as sodas, juices, sweets, and processed snacks? (Frequent consumption of high-sugar foods increases the risk of diabetes.)"
              control={form.control}
              options={[
                { value: 'yes', label: 'Yes' },
                { value: 'no', label: 'No' },
              ]}
            />
            <RadioFormField
              name="test_low_HDL"
              label={`10. Have you ever been told that your HDL ("good") cholesterol was too low (40 in men or 50 in women mg/dl or lower) or that your triglyceride level was too high (1501( (50mg/dl or more)?`}
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
              <Button type="submit" size="lg" className="bg-[#2A3390]">
                {isLoading ? (
                  <PulseLoader
                    color="#fff"
                    loading={isLoading}
                    size={6}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                  />
                ) : (
                  'Submit and Get Instant Results'
                )}
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default Page;
