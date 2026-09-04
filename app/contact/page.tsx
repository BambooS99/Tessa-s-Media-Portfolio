import Nav from "../components/Nav";
import ContactForm from "../components/ContactForm";

export default function Contact() {
  return (
    <main className="bg-[#f0ead6] text-[#201f1d] min-h-screen font-[Lora] pt-6 px-5 pb-14 sm:pt-8 sm:px-8 sm:pb-16 lg:pt-9 lg:px-14 lg:pb-20">
      <Nav />
      <div className="max-w-[1240px] mx-auto">
        <h1 className="font-['Cormorant_Garamond',serif] font-bold text-[38px] sm:text-[52px] lg:text-[72px] leading-[0.95] tracking-[-0.01em] my-8 lg:my-11">
          let&apos;s talk
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-10 lg:gap-16 items-start">
          <div>
            <p className="text-[13.5px] leading-[1.65] font-[Lora] max-w-[440px] mb-10">
              Whether you have a session in mind or just want to ask a question,
              drop a note below. Every shoot starts with a conversation about
              who you are and what you want to remember.
            </p>

            <div className="flex items-center gap-5 max-w-[440px] mb-8">
              <span className="text-[11px] tracking-[0.1em] whitespace-nowrap uppercase">
                email
              </span>
              <div className="flex-1 h-px bg-[rgba(32,31,29,0.3)]" />
              <a
                href="mailto:hello@tessaosborne.com"
                className="text-[13.5px] font-[Lora] hover:text-[#7d5411] transition-colors">
                hello@tessaosborne.com
              </a>
            </div>

            <div className="flex gap-10 font-['Cormorant_Garamond',serif] font-semibold text-[19px]">
              <span>digital</span>
            </div>
          </div>

          <ContactForm />
        </div>
      </div>
    </main>
  );
}
