import Link from "next/link";
import { FlexboxSpacer } from "components/FlexboxSpacer";
import { AutoTypingResume } from "home/AutoTypingResume";

export const Hero = () => {
  return (
    <section className="lg:flex lg:h-[825px] lg:justify-center" style={{ background: 'linear-gradient(to bottom,#fcdad8, #f6fefe)' }}>
      
      <FlexboxSpacer maxWidth={125} minWidth={0} className="hidden lg:block" />
      <div className="mx-auto max-w-2xl pt-8 pb-8 md:pb-8 text-center lg:mx-0 lg:grow lg:pt-32 lg:pb-0 lg:text-left">
        <h1 className="text-primary pb-2 text-4xl font-bold lg:text-5xl">
          Create Your Winning Resume in Minutes.
        </h1>
        <p className="mt-3 text-lg lg:mt-5 lg:text-xl">
          Our Perfect resume builder takes the hassle out of resume writing. Choose from several templates and follow easy prompts to create the perfect job-ready resume.
        </p>
        <Link href="/resume-import" className="btn-primary mt-6 lg:mt-14">
          Create Resume <span aria-hidden="true">→</span>
        </Link>
        <p className="ml-6 mt-3 text-sm text-gray-600">No sign up required</p>
        <p className="mt-3 text-sm text-gray-600 lg:mt-36">
          Already have a resume? Test its ATS readability with the{" "}
          <Link href="/resume-parser" className="underline underline-offset-2">
            resume parser
          </Link>
        </p>
      </div>
      <FlexboxSpacer maxWidth={100} minWidth={50} className="hidden lg:block" />
      <div className="hidden lg:mt-4 lg:block lg:grow">
        <AutoTypingResume />
      </div>
    </section>
  );
};
