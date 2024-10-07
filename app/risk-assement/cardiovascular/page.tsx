'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import RadioFormField from '@/components/RadioFormField';
import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import Link from 'next/link';
import { PulseLoader } from 'react-spinners';
import { secureAxiosInstance } from '@/services/axios';
import Toast from '@/lib/Toast';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const formSchema = z.object({
  age: z.enum(['yes', 'no']),
  family_history: z.enum(['yes', 'no']),
  obesity: z.enum(['yes', 'no']),
  freq_smoking: z.enum(['yes', 'no']),
  test_cholesterol: z.enum(['yes', 'no']),
  high_blood_pressure: z.enum(['yes', 'no']),
  freq_excercise: z.enum(['yes', 'no']),
  rapid_heartbeat: z.enum(['yes', 'no']),
  fatty_meal: z.enum(['yes', 'no']),
  test_diabetes: z.enum(['yes', 'no']),
});

const Page = () => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    const payload = {
      ...values,
    };

    setIsLoading(true);
    secureAxiosInstance
      .post(`/stratification/cardiovascular`, payload)
      .then((response) => {
        Toast.fire({
          icon: 'success',
          title: response?.data?.message,
          background: '#008000',
        });
        console.log(response);
        form.reset();
        router.push('/account/results');
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
          Cardiovascular Disease Risk Assessment
        </h1>
        <p className="text-[#A2A3A6] font-light text-lg py-2 pb-10">
          This questionnaire is to assess your Cardiovascular Disease risk level and
          recommends appropriate actions.{' '}
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
                { value: 'yes', label: 'Yes' },
                { value: 'no', label: 'No' },
              ]}
            />

            <RadioFormField
              name="family_history"
              label="2. Do you have a family history of heart disease, stroke, or other cardiovascular conditions? (Family history plays a large role in determining your risk.)"
              control={form.control}
              options={[
                { value: 'yes', label: 'Yes' },
                { value: 'no', label: 'No' },
              ]}
            />

            {/* weight */}
            <RadioFormField
              name="obesity"
              label="3. Is your current weight >= 70 (in kg)? (Obesity is a major risk factor for cardiovascular disease.)"
              control={form.control}
              options={[
                { value: 'yes', label: 'Yes' },
                { value: 'no', label: 'No' },
              ]}
            />

            <RadioFormField
              name="freq_smoking"
              label="4. Do you currently smoke, or have you smoked regularly in the past? (Smoking significantly increases the risk of heart disease.)"
              control={form.control}
              options={[
                { value: 'yes', label: 'Yes' },
                { value: 'no', label: 'No' },
              ]}
            />

            <RadioFormField
              name="test_cholesterol"
              label="5. Have you been diagnosed with high cholesterol by a healthcare professional? (High cholesterol contributes to the development of heart disease.)"
              control={form.control}
              options={[
                { value: 'yes', label: 'Yes' },
                { value: 'no', label: 'No' },
              ]}
            />

            <RadioFormField
              name="high_blood_pressure"
              label="6. Have you been diagnosed with high blood pressure (over 140/90 mmHg)? (Hypertension is a leading risk factor for cardiovascular diseases such as heart attack and stroke.)"
              control={form.control}
              options={[
                { value: 'yes', label: 'Yes' },
                { value: 'no', label: 'No' },
              ]}
            />
            <RadioFormField
              name="freq_excercise"
              label="7. Do you often engage in physical exercise, including walking, jogging, or other forms of physical activity? (Regular exercise reduces the risk of cardiovascular disease.)"
              control={form.control}
              options={[
                { value: 'yes', label: 'Yes' },
                { value: 'no', label: 'No' },
              ]}
            />

            <RadioFormField
              name="rapid_heartbeat"
              label="8. Have you recently experienced chest pain, shortness of breath, or rapid heartbeats? (These symptoms could indicate a heart condition or other cardiovascular issues.)"
              control={form.control}
              options={[
                { value: 'yes', label: 'Yes' },
                { value: 'no', label: 'No' },
              ]}
            />

            <RadioFormField
              name="fatty_meal"
              label="9. Do you consume a diet high in unhealthy fats, processed foods, and low in fruits and vegetables? (Diet is an important modifiable risk factor for heart disease.)"
              control={form.control}
              options={[
                { value: 'yes', label: 'Yes' },
                { value: 'no', label: 'No' },
              ]}
            />
            <RadioFormField
              name="test_diabetes"
              label="10. Have you been diagnosed with diabetes or prediabetes? (Diabetes increases the risk of heart disease and stroke.)"
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
