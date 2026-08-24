'use client'

import Image from 'next/image'
import { GallerySection } from '@/components/home/GallerySection'
import { MobileCarousel } from '@/components/ui/MobileCarousel'
import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'

const galleryItems = [
  { type: 'image' as const, src: '/gallery/homepagepic1.webp' },
  { type: 'image' as const, src: '/gallery/homepagepic2.webp' },
  { type: 'image' as const, src: '/gallery/homepagepic3.webp' },
  { type: 'image' as const, src: '/gallery/homepagepic4.webp' },
]

const googleReviewsUrl =
  'https://www.google.com/maps/place/Hang+Loose+Divers+-+Koh+Tao+Scuba+Diving+Center/@10.0939149,99.8305669,17z/data=!3m1!4b1!4m6!3m5!1s0x3055a117c57fc515:0xfe77999700e83706!8m2!3d10.0939149!4d99.827992!16s%2Fg%2F11lf5rpxz_?entry=ttu&g_ep=EgoyMDI2MDMwOC4wIKXMDSoASAFQAw%3D%3D'

const reviews = [
  {
    name: 'Amit',
    initial: 'A',
    color: 'bg-[#97ABB1]',
    text: "Me and my friends did the open water course and continued to the advanced course. The manager, the instructors and our personal instructor Kit made us feel like home. For sure it's the best diving shop in Koh Tao — personal attention, great vibes, and truly caring people.",
  },
  {
    name: 'Mohamed',
    initial: 'M',
    color: 'bg-[#F8B85D]',
    text: 'I had an amazing time diving with Hang Loose Divers. From the moment I walked in, the team made me feel welcome — truly lovely people with great energy and professionalism. The service is top-class, everything is organized, safe, and done with real passion.',
  },
  {
    name: 'Laura',
    initial: 'L',
    color: 'bg-[#97ABB1]',
    text: "I had the best time ever learning how to dive with Hang Loose Divers! The whole team is very professional and friendly. I had my own private instructor Mai — she took the time to explain everything calmly, always making sure I was ok. I truly couldn't have asked for better.",
  },
  {
    name: 'Davi',
    initial: 'D',
    color: 'bg-[#F8B85D]',
    text: 'I came to Koh Tao just planning to do a couple of open water dives, but then I stumbled into Hang Loose Divers and that was the best decision ever. I sat down with Marga for 10 minutes and walked out signed up for my Advanced course.',
  },
  {
    name: 'Sophie',
    initial: 'S',
    color: 'bg-[#97ABB1]',
    text: 'As a solo traveler, Hang Loose was everything you could ever ask for. From the moment I walked in, the people there felt like friends rather than staff. Super easygoing, welcoming, and the dives were amazing.',
  },
  {
    name: 'Carlos',
    initial: 'C',
    color: 'bg-[#F8B85D]',
    text: 'Amazing diving experience in this wonderful place! Marga and Meri made these days special for us. We completed the open water and deep adventure with them. They are the best of Koh Tao with such incredible energy. More than recommended!',
  },
  {
    name: 'James',
    initial: 'J',
    color: 'bg-[#97ABB1]',
    text: 'I completed my deep and nitrox specialties with Hang Loose Divers. Mery is very experienced and extremely professional and made diving stress-free. The gear was new and in perfect condition, and the dive sites were spectacular.',
  },
  {
    name: 'Anna',
    initial: 'A',
    color: 'bg-[#F8B85D]',
    text: 'Hang Loose Divers is amazing. The experience, the knowledge, the vibe — everything. I did the Advanced program with Marga and it was a wonderful experience. The boat ride was perfect and organisation on point.',
  },
  {
    name: 'Tom',
    initial: 'T',
    color: 'bg-[#97ABB1]',
    text: 'Absolutely buzzing to have found this gorgeous dive school on Sairee beach. Unreal location right on the walking street in front of the beach so great place to chill after diving. Professional team and amazing underwater experiences.',
  },
  {
    name: 'Elena',
    initial: 'E',
    color: 'bg-[#F8B85D]',
    text: 'The whole team is extremely professional and clearly knows their craft. Everything felt well organized, safe, and smooth. They really create a strong sense of community and make you feel part of the Hang Loose family.',
  },
]

const faqs = [
  {
    question: 'What makes Hang Loose Divers different?',
    answer:
      "We keep things relaxed and well-run. You'll dive with experienced, committed instructors, use brand-new, well-looked-after gear, and enjoy small groups with real personal attention. With a full range of courses and a beachfront base on Sairee, everything's easy—from gearing up to kicking back after the dive. No rush, no crowds—just Good Dives and Good Vibes.",
  },
  {
    question: 'Do I need any requirements before diving?',
    answer:
      'Before diving, you\'ll complete a standard medical questionnaire. If you answer "yes" to any medical conditions, a doctor\'s clearance may be required. Your safety always comes first, and we\'ll guide you through the process to make sure you\'re fit and ready to dive.',
  },
  {
    question: "Can I dive if I'm not a strong swimmer?",
    answer:
      "You don't need to be an expert swimmer, but basic swimming skills and water comfort are important. Our instructors take the time to build confidence, work on buoyancy, and help you feel relaxed and in control in the water.",
  },
  {
    question: "What if I realize a course isn't right for me?",
    answer:
      "No stress. If partway through a course you feel it's not the right fit, come talk to us. We're flexible and happy to adjust plans or explore other options so you still have a great experience with us.",
  },
  {
    question: 'How do I book a course or fun dive?',
    answer:
      'Start by checking availability—just reach out via email, WhatsApp, or phone. Once confirmed, you can secure your spot with a deposit and pay the remaining balance when you sign up at our dive center. Easy, smooth, no surprises.',
  },
  {
    question: "What's your cancellation or rescheduling policy?",
    answer:
      "We keep it fair and simple. 24 hours' notice: You can reschedule without extra charges, subject to availability. Less than 24 hours or no-show: Cancellations made within 24 hours of the scheduled activity are non-refundable, and the deposit will be retained. If plans change, just let us know as soon as possible—we'll always try to help where we can.",
  },
  {
    question: 'Do I need dive insurance?',
    answer:
      'We provide basic accident insurance during our dive trips (valid for up to 30 days), but coverage is limited. For full peace of mind, we strongly recommend getting comprehensive dive insurance, such as Dive Assure or similar providers.',
  },
  {
    question: 'What should I bring on dive day?',
    answer:
      'Keep it simple: swimwear, a towel, reef-safe sunscreen, and a reusable water bottle. We take care of all dive equipment, tanks, weights, and the rest—so you can focus on enjoying the dive.',
  },
  {
    question: 'How long are the dives?',
    answer:
      "Dive times depend on conditions and air consumption, but we don't rush things. Our focus is on smooth, comfortable dives that let you enjoy the underwater world—not racing the clock.",
  },
]

export default function Home() {
  const introRef = useRef<HTMLDivElement | null>(null)
  const vibesRef = useRef<HTMLDivElement | null>(null)
  const coursesRef = useRef<HTMLDivElement | null>(null)
  const [introVisible, setIntroVisible] = useState(false)
  const [vibesVisible, setVibesVisible] = useState(false)
  const [coursesVisible, setCoursesVisible] = useState(false)
  const [reviewIndex, setReviewIndex] = useState(0)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  useEffect(() => {
    const sections = [introRef.current, vibesRef.current, coursesRef.current].filter(
      (el): el is HTMLDivElement => el !== null,
    )
    if (!sections.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return

          if (entry.target === introRef.current) {
            setIntroVisible(true)
          }

          if (entry.target === vibesRef.current) {
            setVibesVisible(true)
          }

          if (entry.target === coursesRef.current) {
            setCoursesVisible(true)
          }

          observer.unobserve(entry.target)
        })
      },
      { threshold: 0.2 },
    )

    sections.forEach((el) => observer.observe(el))

    return () => {
      sections.forEach((el) => observer.unobserve(el))
    }
  }, [])

  return (
    <main>
     {/* Hero Section */}
<section className="relative h-screen w-full overflow-hidden">
  {/* Video Background */}
  <video
    autoPlay
    loop
    muted
    playsInline
    className="absolute inset-0 h-full w-full object-cover"
  >
    <source src="/videos/hero.mp4" type="video/mp4" />
  </video>

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/40" />

  {/* Centered Content */}
  <div className="absolute inset-0 z-10 flex flex-col items-center justify-center">
    <Image
      src="/photos/logo-circle.png"
      alt="Hang Loose Divers"
      width={200}
      height={200}
      unoptimized
      className="animate-fade-in w-[200px] object-contain"
    />
  </div>

  {/* Bottom Tagline */}
  <div
    className="absolute bottom-10 left-1/2 z-10 -translate-x-1/2 opacity-0 animate-[fadeIn_1s_ease-out_0.3s_forwards]"
  >
    <h1
      className="flex flex-col gap-0 text-lg leading-[1.1] tracking-tight uppercase text-[#F8B85D] text-center"
      style={{ fontFamily: 'var(--font-space-mono)' }}
    >
      <span>Dive Center</span>
      <span>Koh Tao</span>
    </h1>
  </div>
</section>
  {/* Intro Section */}
<section className="bg-[#FFFAE7] pt-8 pb-3 md:py-14">
  <div
    ref={introRef}
    className={`mx-auto max-w-3xl px-6 text-center intro-fade ${
      introVisible ? 'intro-fade-visible' : ''
    }`}
  >
    <h2
      className="mb-8 text-3xl md:text-5xl tracking-tight uppercase text-[#0A1628]"
      style={{ fontFamily: 'var(--font-space-mono)' }}
    >
      Diving Adventures in Paradise
    </h2>

    <div className="mx-auto mb-8 h-2.5 w-2.5 rounded-full bg-[#F8B85D]" />

    <p className="text-lg md:text-xl text-black leading-relaxed">
      Welcome to Hang Loose Divers, where quality training meets laid-back island vibes. From
      beginner courses to professional training, we keep groups small and experiences personal,
      with highly trained instructors guiding you every step of the way. Our Scuba Diving
      programs blend unforgettable underwater experiences with island life and Good Vibes Only
    </p>
  </div>
</section>

      {/* Vibes Strip */}
      <section className="bg-[#FFFAE7] pt-4 pb-14 md:pt-8 md:pb-14">
        <div
          ref={vibesRef}
          className={`px-6 md:px-12 lg:px-20 vibes-fade ${vibesVisible ? 'vibes-fade-visible' : ''}`}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-y-7 gap-x-12 md:gap-x-20">
            {/* Diving Level */}
            <div className="flex flex-col items-center text-center">
              <svg viewBox="0 0 94 22" className="h-14 w-14 md:h-16 md:w-16" aria-hidden="true">
                <path
                  fill="#0A1628"
                  fillRule="evenodd"
                  d="M93.64 17c-2.796-4.058-5.46-8.199-8.122-12.341-2.023-3.152-2.988-3.408-5.743-.761-4.143 3.981-8.112 8.135-12.138 12.234-.849.865-1.618 1.804-2.71 3.031-1.185-2.374-2.112-4.389-3.178-6.33-1.615-2.933-3.129-5.945-5.053-8.679-1.981-2.82-3.646-2.88-6.215-.62-2.371 2.087-4.705 4.228-6.897 6.488-2.567 2.643-4.963 5.44-7.602 8.355-.876-1.464-1.712-2.777-2.465-4.134-2.8-5.057-6.421-9.45-11.042-13.051-1.73-1.347-2.36-1.454-3.796-.071C13 6.59 7.373 12.11 1.756 17.64a8 8 0 0 0-1.577 2.162c-.507 1.046.128 1.872 1.147 1.924.777.038 1.82-.325 2.345-.874 2.878-2.996 5.6-6.132 8.437-9.166 2.675-2.861 5.586-5.47 9.323-7.7 2.19 2.595 4.459 4.948 6.318 7.576 2.001 2.828 3.612 5.92 5.41 8.887 1.01 1.668 2.25 3.057 4.625 3.26C42.57 15.976 48.857 9.236 54.272 6.186c1.399 2.643 2.755 5.292 4.197 7.895 1.514 2.731 2.915 5.555 4.735 8.086 1.74 2.419 3.202 2.19 4.815-.252 3.864-5.844 9.361-10.176 14.399-15.132 3.314 4.911 6.47 9.506 9.519 14.168.94 1.435 1.671 2.924 4.21 2.647.324-1.395.654-2.82.853-3.672-1.485-1.263-2.68-1.927-3.364-2.923z"
                />
              </svg>
              <p
                className="mt-2 text-lg font-bold tracking-widest text-black uppercase"
                style={{ fontFamily: 'var(--font-space-mono)', fontWeight: 600 }}
              >
                Diving Level
              </p>
              <p
                className="mt-1 text-lg text-[#0A1628]"
                style={{ fontFamily: 'var(--font-space-mono)' }}
              >
                Beginner to Pro
              </p>
            </div>

            {/* Vibe */}
            <div className="flex flex-col items-center text-center">
              <svg viewBox="0 0 70 79" className="h-14 w-14 md:h-16 md:w-16" aria-hidden="true">
                <defs>
                  <path
                    id="icon-flash_svg__a"
                    d="m.177 61.099 2.44 1.75c6.95-8.272 13.914-16.548 21.13-25.154 2.16 4.282 4.066 8.066 5.986 11.846.64-.013 1.295-.018 1.935-.032C37.899 33.207 47.095 18.069 50.783.754"
                  />
                  <path
                    id="icon-flash_svg__c"
                    d="M50.783 1.754c-.934-.498-1.882-.993-2.816-1.491-6.09 9.04-12.187 18.094-18.864 28.027l-3.34-12.463c-.595-.064-1.193-.14-1.788-.204C15.33 30.759 6.334 45.713.19 62.095"
                  />
                </defs>
                <g fill="none" fillRule="evenodd">
                  <path
                    fill="#FFFAE7"
                    fillRule="nonzero"
                    d="m19.177 77.099 2.44 1.75c6.95-8.272 13.914-16.548 21.13-25.154 2.16 4.282 4.066 8.066 5.986 11.846.64-.013 1.295-.018 1.935-.032 6.231-16.302 15.427-31.44 19.115-48.755"
                  />
                  <g transform="translate(19 16)">
                    <mask id="icon-flash_svg__b" fill="#fff">
                      <use xlinkHref="#icon-flash_svg__a" />
                    </mask>
                    <path
                      fill="#FFFAE7"
                      fillRule="nonzero"
                      d="m2.616 62.849-.583.812.753.54.596-.709zm21.132-25.154.893-.45-.684-1.356-.976 1.164zm5.985 11.846-.892.453.284.56.63-.013zm1.935-.032.021 1 .673-.015.24-.628zM-.406 61.91l2.44 1.75 1.165-1.625-2.439-1.75zm3.788 1.581c6.95-8.271 13.915-16.548 21.132-25.154l-1.533-1.285c-7.216 8.605-14.178 16.88-21.13 25.153zm19.473-25.346c2.158 4.28 4.066 8.066 5.986 11.848l1.783-.905c-1.918-3.78-3.825-7.562-5.983-11.844zm6.9 12.395q.473-.01.96-.016.486-.007.974-.017l-.043-1.999q-.474.01-.96.016-.486.007-.975.017zm2.847-.675c3.104-8.12 6.931-15.914 10.492-23.95C46.64 17.913 49.895 9.723 51.76.963L49.805.546c-1.822 8.554-5.01 16.592-8.54 24.56-3.517 7.938-7.404 15.864-10.531 24.046z"
                      mask="url(#icon-flash_svg__b)"
                    />
                  </g>
                  <path
                    fill="#FFFAE7"
                    fillRule="nonzero"
                    d="M69.783 16.754c-.934-.498-1.882-.993-2.816-1.491-6.09 9.04-12.187 18.094-18.864 28.026l-3.34-12.462c-.595-.064-1.193-.14-1.788-.204-8.645 15.135-17.641 30.09-23.785 46.472"
                  />
                  <g transform="translate(19 15)">
                    <mask id="icon-flash_svg__d" fill="#fff">
                      <use xlinkHref="#icon-flash_svg__c" />
                    </mask>
                    <path
                      fill="#FFFAE7"
                      fillRule="nonzero"
                      d="m47.967.263.47-.883-.796-.424-.503.748zM29.103 28.29l-.966.258.569 2.124 1.227-1.825zm-3.34-12.463.966-.26-.177-.662-.682-.073zm-1.788-.204.107-.994-.65-.07-.325.568zM51.254.872 49.842.124q-.706-.372-1.405-.744l-.94 1.765q.705.375 1.411.748.706.372 1.405.744zM47.138-.296C41.048 8.744 34.95 17.8 28.273 27.732l1.66 1.115C36.609 18.915 42.707 9.861 48.796.822zm-17.07 28.327L26.73 15.568l-1.932.518 3.34 12.462zM25.87 14.832a90 90 0 0 1-.884-.1q-.448-.053-.904-.103l-.214 1.988q.436.048.885.1.447.054.904.104zm-2.763.295C14.48 30.23 5.432 45.267-.747 61.744l1.873.703c6.109-16.29 15.054-31.16 23.717-46.328z"
                      mask="url(#icon-flash_svg__d)"
                    />
                  </g>
                  <path
                    fill="#0A1628"
                    fillRule="nonzero"
                    d="M.177 62.099c6.141-16.396 15.137-31.35 23.786-46.473.595.064 1.193.14 1.788.204l3.336 12.45C35.78 18.358 41.866 9.305 47.967.264c.934.498 1.882.993 2.816 1.491"
                  />
                  <path
                    fill="#0A1628"
                    fillRule="nonzero"
                    d="M50.783 1.754c-3.69 17.302-12.887 32.441-19.103 48.752-.64.013-1.295.018-1.935.032a5840 5840 0 0 0-5.985-11.846C16.528 47.29 9.58 55.573 2.629 63.846l-2.44-1.75"
                  />
                  <path
                    fill="#0A1628"
                    fillRule="nonzero"
                    d="M23.635 23.03c-4.76 8.854-8.961 16.652-13.151 24.447 4.35-3.57 7.476-7.783 10.837-11.81 2.534-3.042 4.756-3.375 6.082 1.182.608 2.07 1.705 4.009 3.113 7.204l12.409-28.49c-.41-.206-.82-.411-1.241-.614C37.727 21.946 33.767 28.931 29 37.367c-2.169-5.79-3.532-9.456-5.353-14.34z"
                  />
                  <path
                    fill="#FFFAE7"
                    fillRule="nonzero"
                    stroke="#FFFAE7"
                    d="M38.171 52.484c-2.178 2.667-4.35 5.327-6.933 7.77 3.503-6.504 7.04-13.083 10.947-20.351l.363-.676 1.55 4.148a7074 7074 0 0 1 3.42 9.169l.375 1.006.53-.934c4.655-8.22 8.521-15.058 12.376-21.874l.073-.13.39.194-4.655 10.686c-2.264 5.2-4.603 10.567-7.11 16.327-.303-.664-.59-1.273-.855-1.837q-.287-.608-.54-1.155c-.523-1.136-.937-2.11-1.231-3.115-.34-1.17-.75-2.07-1.238-2.701-.495-.64-1.09-1.027-1.78-1.097-.676-.07-1.349.176-1.988.6-.641.425-1.29 1.056-1.941 1.837q-.883 1.064-1.753 2.133Z"
                  />
                </g>
              </svg>
              <p
                className="mt-1 text-lg font-bold tracking-widest text-black uppercase"
                style={{ fontFamily: 'var(--font-space-mono)', fontWeight: 600 }}
              >
                Vibe
              </p>
              <p
                className="mt-1 text-lg text-[#0A1628]"
                style={{ fontFamily: 'var(--font-space-mono)' }}
              >
                Good Vibes Only
              </p>
            </div>

            {/* Season */}
            <div className="flex flex-col items-center text-center">
              <svg
                viewBox="0 0 71 62"
                className="h-14 w-14 md:h-16 md:w-16"
                fill="#0A1628"
                stroke="#0A1628"
                strokeWidth="1"
                aria-hidden="true"
              >
                <path d="M50.451 37.6C48.41 47.067 38.27 51.69 31.37 50.487 20.9 48.66 14.48 41.093 15.413 31.443c.425-4.423 3.077-7.79 6.13-10.804 7.146-7.055 17.606-4.603 23.55.327 5.655 4.687 7.224 9.78 5.354 16.637zM35.64 20.278c-3.12-.938-6.63-.756-9.8 1.44-6.168 4.276-9.65 10.895-6.033 18.035 2.706 5.341 7.464 7.925 13.29 8.345 5.332.386 9.97-1.686 12.704-6.169 2.798-4.585 3.41-9.785.333-14.697-2.292-3.66-5.844-5.705-10.493-6.958zM8.817 25.97c-.99.081-1.982.238-2.97.229-1.463-.016-2.942-.055-4.379-.29C.976 25.827.413 25.191.22 24.68c-.087-.235.62-1.08 1.015-1.117 2.712-.254 5.344.013 7.6 1.683q-.009.362-.022.723zM23.634 8.327c-.532-1.383-1.053-2.474-1.366-3.623a13.5 13.5 0 0 1-.448-3.256c-.006-.399.47-.906.861-1.158.178-.117.775.174 1.022.43 1.358 1.418 1.488 5.548-.069 7.607M70.252 41.396c-1.416.918-5.532.549-6.577-.629-.687-.775-.423-1.404.46-1.787 1.395-.604 5.327.968 6.117 2.416M9.035 38.132c-.765.517-1.47 1.218-2.317 1.501-1.147.382-2.398.532-3.615.585-.445.02-1.08-.435-1.31-.847-.118-.214.362-1.037.738-1.195 2.026-.84 4.136-1.007 6.263-.554.079.17.161.343.241.51M16.163 48.8c-1.245 1.144-2.484 2.358-3.828 3.445-.267.217-1.15.104-1.37-.166-.245-.295-.26-1.156-.01-1.407 1.193-1.19 2.483-2.284 3.8-3.336.22-.178.858-.123 1.088.073.227.192.181.705.314 1.386zM67.376 22.55c-.2.362-.318.924-.62 1.052-1.605.667-3.24 1.294-4.91 1.765-.382.11-.956-.457-1.442-.71.31-.505.53-1.347.948-1.46 1.878-.504 3.813-.802 5.729-1.175.1.176.195.351.295.527M7.071 10.967c1.94-.943 3.205.304 4.421 1.145.79.543 1.217 1.602 1.806 2.43-.986-.14-2.063-.074-2.934-.465-1.342-.604-2.847-1.203-3.294-3.107zM39.653 5.5c.231-.725.352-1.517.738-2.15.254-.413.897-.595 1.365-.878.27.473.84 1.01.759 1.41a26 26 0 0 1-1.3 4.349c-.15.38-.88.53-1.341.786-.226-.487-.635-.972-.63-1.456.007-.68.32-1.359.502-2.035l-.09-.024zM50.673 12.819c-.42-2.337 1.37-6.401 3.28-7.454.507 2.313-1.237 6.273-3.28 7.454M28.415 61.678c-.811-1.283-.268-5.16.871-5.948.252-.173.814-.31.93-.185.288.307.633.84.538 1.169-.49 1.732-1.109 3.426-1.683 5.132-.22-.059-.44-.11-.66-.17zM44.566 61.574c.085-1.753.137-3.508.293-5.253.024-.267.524-.614.853-.679.213-.041.61.313.763.576.709 1.215-.053 4.442-1.228 5.404l-.683-.052zM61.583 53.736c-2.383-1.181-4.03-2.687-5.106-4.927 2.026-.263 4.653 2.17 5.106 4.927" />
              </svg>
              <p
                className="mt-1 text-lg font-bold tracking-widest text-black uppercase"
                style={{ fontFamily: 'var(--font-space-mono)', fontWeight: 600 }}
              >
                Season
              </p>
              <p
                className="mt-1 text-lg text-[#0A1628]"
                style={{ fontFamily: 'var(--font-space-mono)' }}
              >
                All Year Around
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <GallerySection />
      {/* Top Courses */}
      <section className="bg-[#FFFAE7] pt-14 md:pt-14 pb-14">
        <div className="px-6 md:px-12 lg:px-20 text-center">
          <p
            className="text-sm font-normal tracking-[0.2em] uppercase text-[#97ABB1]"
            style={{ fontFamily: 'var(--font-space-mono)' }}
          >
            Featured Courses
          </p>
          <h2
            className="mt-3 text-2xl md:text-4xl tracking-tight uppercase text-[#0A1628]"
            style={{ fontFamily: 'var(--font-space-mono)' }}
          >
            Discover Our Top<br />Dive Courses
          </h2>
          <p className="mt-4 mx-auto max-w-2xl text-lg text-black leading-relaxed">
            Find your flow with our most popular dive courses, built to fit your travel plans,
            experience level, and underwater goals. From first-time dives to professional
            certifications, there&apos;s something here for everyone. Choose your path, dive in, and
            let Hang Loose Divers show you the best of scuba diving in Koh Tao—smooth dives, solid
            training, and nothing but Good Vibes.
          </p>
        </div>

        <div ref={coursesRef} className="mt-12 px-6 md:px-12 lg:px-20">
        <MobileCarousel count={3} desktopCols={3}>
          {/* Card 1 – Try Scuba Diving */}
          <div
            className={`snap-center shrink-0 w-[80vw] md:w-auto flex flex-col rounded-xl bg-[#F0EBD8] overflow-hidden transition-all duration-300 ease-out courses-card ${
              coursesVisible ? 'courses-card-visible' : ''
            }`}
            style={{ transitionDelay: coursesVisible ? '0ms' : '0ms' }}
          >
            <div className="relative w-full aspect-[3/2]">
              <Image src="/gallery/homepagebasic.webp" alt="Introductory dive experience in Koh Tao" fill className="object-cover transition-transform duration-500 ease-out" />
            </div>
            <div className="flex flex-col flex-1 p-5 md:p-6 text-center items-center">
              <h3 className="text-xl md:text-2xl uppercase text-[#0A1628] mb-2" style={{ fontFamily: 'var(--font-space-mono)', fontWeight: 600 }}>
                Try Scuba Diving
              </h3>
              <p className="text-sm text-[#0A1628]/60 leading-relaxed mb-3">
                Curious about scuba diving? Take your first dive in Koh Tao with our beginner-friendly introductory dive, where you&apos;ll explore tropical reefs and marine life under the guidance of our experienced instructors.
              </p>
              <div className="flex items-center justify-center gap-2 md:gap-3 text-xs md:text-sm font-normal text-[#0A1628]/50 mb-3 mt-auto">
                <div className="flex items-center gap-1.5">
                  <svg className="h-5 w-5 text-[#97ABB1]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="7" /><path d="M12 9v3l2 2" /></svg>
                  <span>1 Day</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <svg className="h-5 w-5 text-[#97ABB1]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 15c1.2 0 1.8-.5 2.4-1 .6-.5 1.2-1 2.4-1s1.8.5 2.4 1c.6.5 1.2 1 2.4 1s1.8-.5 2.4-1c.6-.5 1.2-1 2.4-1" /></svg>
                  <span>2 Dives</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <svg className="h-5 w-5 text-[#97ABB1]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="10" rx="1.5" /><circle cx="12" cy="12" r="2.5" /><path d="M6 10v4M18 10v4" /></svg>
                  <span className="font-bold text-[#0A1628]/60">3,500 THB</span>
                </div>
              </div>
              <Link href="/courses/beginners/try-scuba" className="text-base font-normal uppercase tracking-wide text-[#F8B85D] hover:underline underline-offset-4 transition-all duration-300" style={{ fontFamily: 'var(--font-space-mono)' }}>
                Learn More →
              </Link>
            </div>
          </div>

          {/* Card 2 – Open Water Diver */}
          <div
            className={`snap-center shrink-0 w-[80vw] md:w-auto flex flex-col rounded-xl bg-[#F0EBD8] overflow-hidden transition-all duration-300 ease-out courses-card ${
              coursesVisible ? 'courses-card-visible' : ''
            }`}
            style={{ transitionDelay: coursesVisible ? '120ms' : '0ms' }}
          >
            <div className="relative w-full aspect-[3/2]">
              <Image src="/gallery/homepageowd.webp" alt="Open Water diver training in Koh Tao" fill className="object-cover transition-transform duration-500 ease-out" />
            </div>
            <div className="flex flex-col flex-1 p-5 md:p-6 text-center items-center">
              <h3 className="text-xl md:text-2xl uppercase text-[#0A1628] mb-2" style={{ fontFamily: 'var(--font-space-mono)', fontWeight: 600 }}>
                Open Water Diver
              </h3>
              <p className="text-sm text-[#0A1628]/60 leading-relaxed mb-3">
                Become a certified Open Water Diver in only three days and gain a worldwide-recognized license that lets you dive safely and confidently to 18 meters.
              </p>
              <div className="flex items-center justify-center gap-1.5 md:gap-3 text-xs md:text-sm font-normal text-[#0A1628]/50 mb-3 mt-auto whitespace-nowrap">
                <div className="flex items-center gap-1">
                  <svg className="h-5 w-5 text-[#97ABB1]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="7" /><path d="M12 9v3l2 2" /></svg>
                  <span>2.5 Days</span>
                </div>
                <div className="flex items-center gap-1">
                  <svg className="h-5 w-5 text-[#97ABB1]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 15c1.2 0 1.8-.5 2.4-1 .6-.5 1.2-1 2.4-1s1.8.5 2.4 1c.6.5 1.2 1 2.4 1s1.8-.5 2.4-1c.6-.5 1.2-1 2.4-1" /></svg>
                  <span>6 Dives</span>
                </div>
                <div className="flex items-center gap-1">
                  <svg className="h-5 w-5 text-[#97ABB1]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="10" rx="1.5" /><circle cx="12" cy="12" r="2.5" /><path d="M6 10v4M18 10v4" /></svg>
                  <span className="font-bold text-[#0A1628]/60">9,900 THB</span>
                </div>
              </div>
              <Link href="/courses/beginners/open-water" className="text-base font-normal uppercase tracking-wide text-[#F8B85D] hover:underline underline-offset-4 transition-all duration-300" style={{ fontFamily: 'var(--font-space-mono)' }}>
                Learn More →
              </Link>
            </div>
          </div>

          {/* Card 3 – Advanced Open Water Diver */}
          <div
            className={`snap-center shrink-0 w-[80vw] md:w-auto flex flex-col rounded-xl bg-[#F0EBD8] overflow-hidden transition-all duration-300 ease-out courses-card ${
              coursesVisible ? 'courses-card-visible' : ''
            }`}
            style={{ transitionDelay: coursesVisible ? '240ms' : '0ms' }}
          >
            <div className="relative w-full aspect-[3/2]">
              <Image src="/gallery/homepageadv.webp" alt="Advanced Open Water diving in Koh Tao" fill className="object-cover transition-transform duration-500 ease-out" />
            </div>
            <div className="flex flex-col flex-1 p-5 md:p-6 text-center items-center">
              <h3 className="text-xl md:text-2xl uppercase text-[#0A1628] mb-2" style={{ fontFamily: 'var(--font-space-mono)', fontWeight: 600 }}>
                Advanced Diver
              </h3>
              <p className="text-sm text-[#0A1628]/60 leading-relaxed mb-3">
                The Advanced Open Water Diver course takes your diving further with deeper dives, night adventures, wreck exploration, and improved buoyancy—all while building confidence and maximizing fun underwater.
              </p>
              <div className="flex items-center justify-center gap-2 md:gap-3 text-xs md:text-sm font-normal text-[#0A1628]/50 mb-3 mt-auto">
                <div className="flex items-center gap-1.5">
                  <svg className="h-5 w-5 text-[#97ABB1]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="7" /><path d="M12 9v3l2 2" /></svg>
                  <span>2 Days</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <svg className="h-5 w-5 text-[#97ABB1]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 15c1.2 0 1.8-.5 2.4-1 .6-.5 1.2-1 2.4-1s1.8.5 2.4 1c.6.5 1.2 1 2.4 1s1.8-.5 2.4-1c.6-.5 1.2-1 2.4-1" /></svg>
                  <span>5 Dives</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <svg className="h-5 w-5 text-[#97ABB1]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="10" rx="1.5" /><circle cx="12" cy="12" r="2.5" /><path d="M6 10v4M18 10v4" /></svg>
                  <span className="font-bold text-[#0A1628]/60">9,500 THB</span>
                </div>
              </div>
              <Link href="/courses/advanced/advanced-open-water" className="text-base font-normal uppercase tracking-wide text-[#F8B85D] hover:underline underline-offset-4 transition-all duration-300" style={{ fontFamily: 'var(--font-space-mono)' }}>
                Learn More →
              </Link>
            </div>
          </div>
        </MobileCarousel>
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 px-6 md:px-12 lg:px-20 text-center">
          <Link
            href="/courses"
            className="inline-flex border-none bg-transparent px-0 py-2 text-xl md:text-2xl font-normal uppercase tracking-wide text-[#F8B85D] transition-all duration-300 hover:underline underline-offset-4"
            style={{ fontFamily: 'var(--font-space-mono)' }}
          >
            Explore All Courses →
          </Link>
        </div>
      </section>

      {/* Who We Are + How We Work */}
      <section className="bg-[#FFFAE7] py-12 md:py-16">
        <div className="px-6 md:px-12 lg:px-20">
          <div className="flex flex-col gap-16">

            {/* Who We Are */}
            <div className="bg-[#F0EBD8] rounded-2xl overflow-hidden flex flex-col lg:grid lg:grid-cols-2">
              {/* Mobile: title */}
              <div className="lg:hidden px-8 pt-8 pb-4">
                <p className="text-sm font-normal tracking-[0.25em] uppercase text-[#97ABB1] mb-4" style={{ fontFamily: 'var(--font-space-mono)' }}>Who We Are</p>
                <h2 className="text-2xl tracking-tight uppercase text-[#0A1628]" style={{ fontFamily: 'var(--font-space-mono)', lineHeight: 1.1 }}>By the Ocean Lies the Home of Good Vibes</h2>
              </div>
              {/* Image */}
              <div className="relative aspect-[5/4] pb-[80%] lg:pb-0 lg:aspect-auto lg:min-h-[520px] lg:order-2">
                <Image src="/gallery/aboutwhowearehome.webp" alt="Hang Loose Divers team on Koh Tao" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
              </div>
              {/* Mobile: text + CTA */}
              <div className="lg:hidden px-8 pt-6 pb-8">
                <p className="text-base text-black leading-relaxed mb-8">
                  We believe diving is more than a hobby – it&apos;s a lifestyle – and we want
                  you to immerse yourself in it at one of the most stunning diving destinations
                  across the planet. And in the end, we want to leave you with not only the best
                  diving experience, but also memories for life, new friends and a feeling
                  that this adventure should never end.
                </p>
                <Link href="/about/who-we-are" className="text-base font-normal uppercase tracking-wide text-[#F8B85D] hover:underline underline-offset-4 transition-all duration-300 px-0 py-2" style={{ fontFamily: 'var(--font-space-mono)' }}>More About Who We Are →</Link>
              </div>
              {/* Desktop: full content */}
              <div className="hidden lg:flex flex-col justify-center p-12 lg:order-1">
                <p className="text-sm font-normal tracking-[0.25em] uppercase text-[#97ABB1] mb-4" style={{ fontFamily: 'var(--font-space-mono)' }}>Who We Are</p>
                <h2 className="text-4xl tracking-tight uppercase text-[#0A1628] mb-6" style={{ fontFamily: 'var(--font-space-mono)', lineHeight: 1.1 }}>By the Ocean Lies the Home of Good Vibes</h2>
                <p className="text-lg text-black leading-relaxed mb-8">
                  We believe diving is more than a hobby – it&apos;s a lifestyle – and we want
                  you to immerse yourself in it at one of the most stunning diving destinations
                  across the planet. And in the end, we want to leave you with not only the best
                  diving experience, but also memories for life, new friends and a feeling
                  that this adventure should never end.
                </p>
                <Link href="/about/who-we-are" className="text-base font-normal uppercase tracking-wide text-[#F8B85D] hover:underline underline-offset-4 transition-all duration-300 px-0 py-2" style={{ fontFamily: 'var(--font-space-mono)' }}>More About Who We Are →</Link>
              </div>
            </div>

            {/* How We Work */}
            <div className="bg-[#F0EBD8] rounded-2xl overflow-hidden flex flex-col lg:grid lg:grid-cols-2">
              {/* Mobile: title */}
              <div className="lg:hidden px-8 pt-8 pb-4">
                <p className="text-sm font-normal tracking-[0.25em] uppercase text-[#97ABB1] mb-4" style={{ fontFamily: 'var(--font-space-mono)' }}>How We Work</p>
                <h2 className="text-2xl tracking-tight uppercase text-[#0A1628]" style={{ fontFamily: 'var(--font-space-mono)', lineHeight: 1.1 }}>The Hang Loose Way</h2>
              </div>
              {/* Image */}
              <div className="relative aspect-[5/4] pb-[80%] lg:pb-0 lg:aspect-auto lg:min-h-[520px] lg:order-1">
                <Image src="/gallery/abouthowweworkhome.webp" alt="Diving the Hang Loose way" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
              </div>
              {/* Mobile: text + CTA */}
              <div className="lg:hidden px-8 pt-6 pb-8">
                <p className="text-base text-black leading-relaxed mb-8">
                  At Hang Loose Divers, we keep things flowing the way a great dive day
                  should—easy starts, smooth runs, and zero unnecessary stress. Everything
                  is set up to let you focus on the ocean, the experience, and the people
                  you&apos;re sharing it with. From the first step onto the sand to the last
                  sunset of the day, this is diving done with intention, rhythm, and good
                  vibes only.
                </p>
                <Link href="/about/how-we-work" className="text-base font-normal uppercase tracking-wide text-[#F8B85D] hover:underline underline-offset-4 transition-all duration-300 px-0 py-2" style={{ fontFamily: 'var(--font-space-mono)' }}>More About How We Work&nbsp;→</Link>
              </div>
              {/* Desktop: full content */}
              <div className="hidden lg:flex flex-col justify-center p-12 lg:order-2">
                <p className="text-sm font-normal tracking-[0.25em] uppercase text-[#97ABB1] mb-4" style={{ fontFamily: 'var(--font-space-mono)' }}>How We Work</p>
                <h2 className="text-4xl tracking-tight uppercase text-[#0A1628] mb-6" style={{ fontFamily: 'var(--font-space-mono)', lineHeight: 1.1 }}>The Hang Loose Way</h2>
                <p className="text-lg text-black leading-relaxed mb-8">
                  At Hang Loose Divers, we keep things flowing the way a great dive day
                  should—easy starts, smooth runs, and zero unnecessary stress. Everything
                  is set up to let you focus on the ocean, the experience, and the people
                  you&apos;re sharing it with. From the first step onto the sand to the last
                  sunset of the day, this is diving done with intention, rhythm, and good
                  vibes only.
                </p>
                <Link href="/about/how-we-work" className="text-base font-normal uppercase tracking-wide text-[#F8B85D] hover:underline underline-offset-4 transition-all duration-300 px-0 py-2" style={{ fontFamily: 'var(--font-space-mono)' }}>More About How We Work&nbsp;→</Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Google Reviews Carousel */}
      <section className="bg-[#FFFAE7] py-16 md:py-24">
        <div className="px-6 md:px-12 lg:px-20">
          {/* Header */}
          <div className="text-center mb-12">
            <p
              className="text-sm font-normal tracking-[0.25em] uppercase text-[#97ABB1] mb-4"
              style={{ fontFamily: 'var(--font-space-mono)' }}
            >
              Reviews
            </p>
            <h2
              className="text-2xl md:text-4xl tracking-tight uppercase text-[#0A1628] mb-6"
              style={{ fontFamily: 'var(--font-space-mono)', lineHeight: 1.1 }}
            >
              Loved by Divers
            </h2>
            {/* Google badge */}
            <a
              href={googleReviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-3 hover:opacity-80 transition-opacity"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18A10.96 10.96 0 0 0 1 12c0 1.77.42 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05" />
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
              </svg>
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4" viewBox="0 0 24 24" fill="#F8B85D">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              <span
                className="text-sm font-bold text-[#0A1628]"
                style={{ fontFamily: 'var(--font-space-mono)' }}
              >
                5.0
              </span>
              <span className="text-sm text-[#97ABB1] group-hover:text-[#F8B85D] transition-colors">
                on Google →
              </span>
            </a>
          </div>

          {/* Mobile: native scroll snap */}
          <div
            className="md:hidden flex gap-4 overflow-x-auto snap-x snap-mandatory pb-2 -mx-6 px-6"
            style={{ scrollbarWidth: 'none', WebkitOverflowScrolling: 'touch' } as React.CSSProperties}
          >
            {reviews.map((review, i) => (
              <a
                key={i}
                href={googleReviewsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="snap-center flex-shrink-0 w-[82vw] group cursor-pointer"
              >
                <div className="bg-white rounded-xl p-6 h-full flex flex-col hover:shadow-md transition-shadow duration-300">
                  <div className="flex gap-0.5 mb-4">
                    {[...Array(5)].map((_, j) => (
                      <svg key={j} className="w-4 h-4" viewBox="0 0 24 24" fill="#F8B85D">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-sm text-[#0A1628]/70 leading-relaxed flex-1">&ldquo;{review.text}&rdquo;</p>
                  <div className="mt-5 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-full ${review.color} flex items-center justify-center text-xs font-bold text-white`} style={{ fontFamily: 'var(--font-space-mono)' }}>
                        {review.initial}
                      </div>
                      <div>
                        <p className="text-xs font-bold uppercase tracking-wider text-[#0A1628]" style={{ fontFamily: 'var(--font-space-mono)' }}>{review.name}</p>
                        <p className="text-[10px] text-[#97ABB1]">Google Review</p>
                      </div>
                    </div>
                    <svg className="w-4 h-4 opacity-30" viewBox="0 0 24 24" fill="none">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" />
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18A10.96 10.96 0 0 0 1 12c0 1.77.42 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05" />
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                    </svg>
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Desktop: JS arrow carousel */}
          <div className="hidden md:block relative">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${reviewIndex * (100 / 3)}%)` }}
              >
                {reviews.map((review, i) => (
                  <a
                    key={i}
                    href={googleReviewsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-shrink-0 w-1/3 px-3 group cursor-pointer"
                  >
                    <div className="bg-white rounded-xl p-6 h-full flex flex-col hover:shadow-md transition-shadow duration-300">
                      <div className="flex gap-0.5 mb-4">
                        {[...Array(5)].map((_, j) => (
                          <svg key={j} className="w-4 h-4" viewBox="0 0 24 24" fill="#F8B85D">
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                          </svg>
                        ))}
                      </div>
                      <p className="text-sm text-[#0A1628]/70 leading-relaxed flex-1">&ldquo;{review.text}&rdquo;</p>
                      <div className="mt-5 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className={`w-8 h-8 rounded-full ${review.color} flex items-center justify-center text-xs font-bold text-white`} style={{ fontFamily: 'var(--font-space-mono)' }}>
                            {review.initial}
                          </div>
                          <div>
                            <p className="text-xs font-bold uppercase tracking-wider text-[#0A1628]" style={{ fontFamily: 'var(--font-space-mono)' }}>{review.name}</p>
                            <p className="text-[10px] text-[#97ABB1]">Google Review</p>
                          </div>
                        </div>
                        <svg className="w-4 h-4 opacity-30 group-hover:opacity-60 transition-opacity" viewBox="0 0 24 24" fill="none">
                          <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" />
                          <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                          <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18A10.96 10.96 0 0 0 1 12c0 1.77.42 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05" />
                          <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                        </svg>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
            <button
              onClick={() => setReviewIndex(Math.max(0, reviewIndex - 1))}
              className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:shadow-lg transition-all ${reviewIndex === 0 ? 'opacity-30 cursor-not-allowed' : 'opacity-100'}`}
              disabled={reviewIndex === 0}
              aria-label="Previous reviews"
            >
              <svg className="w-5 h-5 text-[#0A1628]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => setReviewIndex(Math.min(reviews.length - 3, reviewIndex + 1))}
              className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:shadow-lg transition-all ${reviewIndex >= reviews.length - 3 ? 'opacity-30 cursor-not-allowed' : 'opacity-100'}`}
              disabled={reviewIndex >= reviews.length - 3}
              aria-label="Next reviews"
            >
              <svg className="w-5 h-5 text-[#0A1628]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-10">
            <a
              href={googleReviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl md:text-2xl font-normal uppercase tracking-wide text-[#F8B85D] hover:underline underline-offset-4 transition-all duration-300 px-0 py-2"
              style={{ fontFamily: 'var(--font-space-mono)' }}
            >
              Read All Reviews on Google →
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#FFFAE7] py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-6 md:px-12 lg:px-20">
          {/* Header */}
          <div className="text-center mb-12">
            <p
              className="text-sm font-normal tracking-[0.25em] uppercase text-[#97ABB1] mb-4"
              style={{ fontFamily: 'var(--font-space-mono)' }}
            >
              FAQ
            </p>
            <h2
              className="text-2xl md:text-4xl tracking-tight uppercase text-[#0A1628]"
              style={{ fontFamily: 'var(--font-space-mono)', lineHeight: 1.1 }}
            >
              Got Questions?
            </h2>
            <div className="flex justify-center mt-6">
              <div className="h-2.5 w-2.5 rounded-full bg-[#F8B85D]" />
            </div>
          </div>

          {/* Accordion */}
          <div className="divide-y divide-[#0A1628]/10">
            {faqs.map((faq, i) => (
              <div key={i}>
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full py-6 flex items-center justify-between text-left group"
                >
                  <span
                    className="text-sm md:text-base font-bold tracking-wider text-[#0A1628] pr-8 group-hover:text-[#97ABB1] transition-colors"
                    style={{ fontFamily: 'var(--font-space-mono)' }}
                  >
                    {faq.question}
                  </span>
                  <span
                    className={`flex-shrink-0 w-6 h-6 flex items-center justify-center text-[#F8B85D] transition-transform duration-300 ${
                      openFaq === i ? 'rotate-45' : ''
                    }`}
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                    </svg>
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-out ${
                    openFaq === i ? 'max-h-96 pb-6' : 'max-h-0'
                  }`}
                >
                  <p className="text-sm md:text-base text-[#0A1628]/60 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-12">
            <p className="text-sm text-[#97ABB1] mb-4">Still have questions?</p>
            <Link
              href="/contact"
              className="text-xl md:text-2xl font-normal uppercase tracking-wide text-[#F8B85D] hover:underline underline-offset-4 transition-all duration-300 px-0 py-2"
              style={{ fontFamily: 'var(--font-space-mono)' }}
            >
              Get in Touch →
            </Link>
          </div>
        </div>
      </section>

    </main>
  )
}
