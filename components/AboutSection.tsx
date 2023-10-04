import React from "react"
import Image from "next/image"

const skills = [
  { skill: "HTML" },
  { skill: "CSS" },
  { skill: "JavaScript" },
  { skill: "TypeScript" },
  { skill: "Python" },
  { skill: "React" },
  { skill: "Next.js" },
  { skill: "Tailwind CSS" },
  { skill: "Git" },
  { skill: "GitHub" },
  { skill: "Jupyter Notebooks" },
]

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
         私について
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
             自己紹介
            </h1>
            <p>
              こんにちは、<span className="font-bold text-teal-500">駆け出しエンジニア</span>の<span className="font-bold text-teal-500">よくけん</span>です！！{" "}
              <span className="font-bold">{"Web系の勉強を趣味とする大学院生です。"}</span>,
              <span className="font-bold">{"常に前向きに日々WEBの勉強に取り組んでいます。"}</span>, 
              <span className="font-bold">{"その他にも、音楽や語学を嗜んでいます！！"}</span>
            </p>
            <br />
            <p>
            一人前の<span className="font-bold text-teal-500">フルスタックエンジニアを目標</span>に、頑張っています！！！ 
            </p>
            <br />
            <p>
            多岐にわたる趣味を持っており、
            常に自分を忙しくして過ごしています。
            <span className="font-bold text-teal-500">読書、スポーツ、語学、音楽など</span>、常に<span className="font-bold text-teal-500">新しい趣味や刺激</span>を求めており、
            新しいことを学ぶのが大好きです。
            </p>
            <br />
            <p>
             自分自身を{" "}
              <span className="font-bold text-teal-500">
                立ち止まらない
              </span>{" "}
              そう信じて、可能性の限界を常に広げることを目指しています。
              新しい機会と出会いを求めて精進中！！！
            </p>
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6">スキル</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                  >
                    {item.skill}
                  </p>
                )
              })}
            </div>
            <Image
              src="/skills.png"
              alt=""
              width={325}
              height={325}
              className="hidden md:block md:relative md:top-20 md:left-20 md:z-0"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
