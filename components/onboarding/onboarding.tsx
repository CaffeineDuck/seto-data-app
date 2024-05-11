'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button, message, Select, Steps, theme } from 'antd';

export default function MainOnboardingComponent() {
  const [currentStep, setCurrentStep] = useState(0);
  const [collectedData, setCollectedData] = useState<{
    role: string;
    mission: string;
    data: string;
  }>({
    role: '',
    mission: '',
    data: '',
  });

  const steps = [
    {
      title: 'First',
      content: (
        <StepOne
          setCollectedData={setCollectedData}
          collectedData={collectedData}
          currentStep={currentStep}
          setCurrentStep={setCurrentStep}
        />
      ),
    },
    {
      title: 'Second',
      content: (
        <StepTwo
          setCollectedData={setCollectedData}
          collectedData={collectedData}
          currentStep={currentStep}
          setCurrentStep={setCurrentStep}
        />
      ),
    },
    {
      title: 'Last',
      content: (
        <StepThree
          setCollectedData={setCollectedData}
          collectedData={collectedData}
          currentStep={currentStep}
          setCurrentStep={setCurrentStep}
        />
      ),
    },
  ];
  return (
    <div className="grid h-screen w-full items-center">
      <div className="mx-auto w-full max-w-3xl space-y-8" data-id="18">
        <div data-id="19">
          <h1
            className="text-3xl font-bold tracking-tight sm:text-4xl"
            data-id="20"
          >
            Welcome to Seto Data.
          </h1>
          <p className="mt-4 text-gray-500 dark:text-gray-400" data-id="21">
            Please complete the following steps to get started.
          </p>
        </div>
        {steps[currentStep].content}
      </div>
    </div>
  );
}

function StepOne({
  currentStep,
  setCurrentStep,
  collectedData,
  setCollectedData,
}: {
  currentStep: number;
  setCurrentStep: (step: number) => void;
  collectedData: {
    role: string;
    mission: string;
    data: string;
  };
  setCollectedData: (data: {
    role: string;
    mission: string;
    data: string;
  }) => void;
}) {
  return (
    <div
      className="rounded-lg bg-white p-6 shadow dark:bg-gray-900"
      data-id="22"
    >
      <div className="mb-6" data-id="23">
        <div className="flex items-center justify-between" data-id="25">
          <h2 className="text-lg font-semibold" data-id="26">
            Tell us about your role
          </h2>
          <span
            className="text-sm text-gray-500 dark:text-gray-400"
            data-id="27"
          >
            Step 1 of 3
          </span>
        </div>
        <p className="mt-2 text-gray-500 dark:text-gray-400" data-id="28">
          Select the role that best describes your position.
        </p>
      </div>
      <form className="space-y-6" data-id="29">
        <div data-id="30">
          <label
            className="mb-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            htmlFor="role"
            data-id="31"
          >
            Your Role
          </label>
          <Select
            onChange={(value) => {
              setCollectedData({
                ...collectedData,
                role: value,
              });
            }}
            id="role"
            className="w-full"
            placeholder="Select your role"
            data-id="32"
            options={[
              {
                label: 'Research Analyst',
                value: 'research_analyst',
              },
              {
                label: 'Field Researcher',
                value: 'field_researcher',
              },
              {
                label: 'Policy Analyst',
                value: 'policy_analyst',
              },
              {
                label: 'Survey Coordinator',
                value: 'survey_coordinator',
              },
              {
                label: 'Other',
                value: 'other',
              },
            ]}
          />
        </div>
        <div className="flex justify-end" data-id="40">
          <button
            onClick={() => {
              currentStep > 0 && setCurrentStep(currentStep - 1);
            }}
            disabled={currentStep === 0}
            className="mr-2 inline-flex h-10 items-center justify-center whitespace-nowrap rounded-md border border-input bg-background px-4 py-2 text-sm font-medium ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
            data-id="41"
          >
            Previous
          </button>
          <button
            onClick={() => {
              currentStep < 2 && setCurrentStep(currentStep + 1);
            }}
            disabled={!collectedData?.role}
            className="inline-flex h-10 items-center justify-center whitespace-nowrap rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground ring-offset-background transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
            type="submit"
            data-id="42"
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
}

function StepTwo({
  currentStep,
  setCurrentStep,
  collectedData,
  setCollectedData,
}: {
  currentStep: number;
  setCurrentStep: (step: number) => void;
  collectedData: {
    role: string;
    mission: string;
    data: string;
  };
  setCollectedData: (data: {
    role: string;
    mission: string;
    data: string;
  }) => void;
}) {
  return (
    <div
      className="rounded-lg bg-white p-6 shadow dark:bg-gray-900"
      data-id="22"
    >
      <div className="mb-6" data-id="23">
        <div className="flex items-center justify-between" data-id="25">
          <h2 className="text-lg font-semibold" data-id="26">
            What is the mission your NGO / INGO is driving for?
          </h2>
          <span
            className="text-sm text-gray-500 dark:text-gray-400"
            data-id="27"
          >
            Step 2 of 3
          </span>
        </div>
        <p className="mt-2 text-gray-500 dark:text-gray-400" data-id="28">
          Select the mission that best describes your organization.
        </p>
      </div>
      <form className="space-y-6" data-id="29">
        <div data-id="30">
          <label
            className="mb-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            htmlFor="role"
            data-id="31"
          >
            Your Mission
          </label>
          <Select
            onChange={(value) => {
              setCollectedData({
                ...collectedData,
                mission: value,
              });
            }}
            id="role"
            className="w-full"
            placeholder="Select your role"
            data-id="32"
            options={[
              {
                label: 'Health',
                value: 'health',
              },
              {
                label: 'Education',
                value: 'education',
              },
              {
                label: 'Environment',
                value: 'environment',
              },
              {
                label: 'Human Rights',
                value: 'human_rights',
              },
              {
                label: 'Social Justice',
                value: 'social_justice',
              },
              {
                label: 'Disaster Relief',
                value: 'disaster_relief',
              },
              {
                label: 'Other',
                value: 'other',
              },
            ]}
          />
        </div>
        <div className="flex justify-end" data-id="40">
          <button
            onClick={() => {
              currentStep > 0 && setCurrentStep(currentStep - 1);
            }}
            disabled={currentStep === 0}
            className="mr-2 inline-flex h-10 items-center justify-center whitespace-nowrap rounded-md border border-input bg-background px-4 py-2 text-sm font-medium ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
            data-id="41"
          >
            Previous
          </button>
          <button
            onClick={() => {
              currentStep < 2 && setCurrentStep(currentStep + 1);
            }}
            disabled={!collectedData?.mission}
            className="inline-flex h-10 items-center justify-center whitespace-nowrap rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground ring-offset-background transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
            type="submit"
            data-id="42"
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
}

function StepThree({
  currentStep,
  setCurrentStep,
  collectedData,
  setCollectedData,
}: {
  currentStep: number;
  setCurrentStep: (step: number) => void;
  collectedData: {
    role: string;
    mission: string;
    data: string;
  };
  setCollectedData: (data: {
    role: string;
    mission: string;
    data: string;
  }) => void;
}) {
  return (
    <div
      className="rounded-lg bg-white p-6 shadow dark:bg-gray-900"
      data-id="22"
    >
      <div className="mb-6" data-id="23">
        <div className="flex items-center justify-between" data-id="25">
          <h2 className="text-lg font-semibold" data-id="26">
            What type of data are you interested in?
          </h2>
          <span
            className="text-sm text-gray-500 dark:text-gray-400"
            data-id="27"
          >
            Step 3 of 3
          </span>
        </div>
        <p className="mt-2 text-gray-500 dark:text-gray-400" data-id="28">
          Select the type of data that you are interested in.
        </p>
      </div>
      <form className="space-y-6" data-id="29">
        <div data-id="30">
          <label
            className="mb-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            htmlFor="role"
            data-id="31"
          >
            Type of data:
          </label>
          <Select
            onChange={(value) => {
              setCollectedData({
                ...collectedData,
                data: value,
              });
            }}
            id="role"
            className="w-full"
            placeholder="Select your role"
            data-id="32"
            options={[
              {
                label: 'Raw',
                value: 'raw',
              },
              {
                label: 'Graph',
                value: 'graph',
              },
              {
                label: 'Insights',
                value: 'insights',
              },
              {
                label: 'Analytical',
                value: 'analytical',
              },
              {
                label: 'Predictive',
                value: 'predictive',
              },
              {
                label: 'Prescriptive',
                value: 'prescriptive',
              },
              {
                label: 'Descriptive',
                value: 'descriptive',
              },
            ]}
          />
          <select
            aria-hidden="true"
            tabIndex={-1}
            style={{
              position: 'absolute',
              border: '0px',
              width: '1px',
              height: '1px',
              padding: '0px',
              margin: '-1px',
              overflow: 'hidden',
              clip: 'rect(0px, 0px, 0px, 0px);',
              whiteSpace: 'nowrap',
              overflowWrap: 'normal',
            }}
          >
            <option value=""></option>
            <option value="manager">Manager</option>
            <option value="developer">Developer</option>
            <option value="designer">Designer</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="flex justify-end" data-id="40">
          <button
            onClick={() => {
              currentStep > 0 && setCurrentStep(currentStep - 1);
            }}
            disabled={currentStep === 0}
            className="mr-2 inline-flex h-10 items-center justify-center whitespace-nowrap rounded-md border border-input bg-background px-4 py-2 text-sm font-medium ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
            data-id="41"
          >
            Previous
          </button>
          <Link href="/">
            <button
              disabled={!collectedData?.data}
              onClick={() => {
                currentStep < 2 && setCurrentStep(currentStep + 1);
              }}
              className="inline-flex h-10 items-center justify-center whitespace-nowrap rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground ring-offset-background transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
              type="submit"
              data-id="42"
            >
              Done
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
}
