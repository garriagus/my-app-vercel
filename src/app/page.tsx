import Image from "next/image";
import SocialIcon from "@/components/social-icons";
import siteMetadata from "@/utils/siteMetadata";
import NavBar from "@/components/navbar"
import Link from "next/link";

export default function Page() {

  return (
    <div className="flex justify-center content-center">
      <div className="border border-gray-300 rounded-sm shadow-lg py-10 px-10 w-4/5 mt-10 mb-10">
        <div className="flex justify-between items-center">
          <Image
            src="/6.png"
            alt="100"
            className="relative bg-cover bg-no-repeat rounded-full h-40 w-40 mr-4 "
            width={100}
            height={100}
          ></Image>

          {/* Pseudo-elemento para la superposición */}
          <div className="grid justify-items-end">
            <h1 className="t">
              <Link href="https://agustingarrido.com.ar/" className="self-center whitespace-nowrap">
                <p className="regular-variation text-4xl md:mt-0 md:mb-0">
                  <div style={{ display: "flex", gap: "2px" }}>
                    <span style={{ fontVariationSettings: '"wght" 180, "wdth" 310' }}>A</span>
                    <span style={{ fontVariationSettings: '"wght" 140, "wdth" 500' }}>g</span>
                    <span style={{ fontVariationSettings: '"wght" 190, "wdth" 375' }}>u</span>
                    <span style={{ fontVariationSettings: '"wght" 130, "wdth" 260' }}>s</span>
                    <span style={{ fontVariationSettings: '"wght" 45, "wdth" 360' }}>t</span>
                    <span style={{ fontVariationSettings: '"wght" 100, "wdth" 470' }}>í</span>
                    <span style={{ fontVariationSettings: '"wght" 155, "wdth" 210' }}>n</span>
                    <span style={{ fontVariationSettings: '"wght" 50, "wdth" 270' }}>G</span>
                    <span style={{ fontVariationSettings: '"wght" 120, "wdth" 390' }}>a</span>
                    <span style={{ fontVariationSettings: '"wght" 180, "wdth" 340' }}>r</span>
                    <span style={{ fontVariationSettings: '"wght" 190, "wdth" 230' }}>r</span>
                    <span style={{ fontVariationSettings: '"wght" 160, "wdth" 410' }}>i</span>
                    <span style={{ fontVariationSettings: '"wght" 115, "wdth" 380' }}>d</span>
                    <span style={{ fontVariationSettings: '"wght" 90, "wdth" 290' }}>o</span>
                  </div>
                </p>
              </Link>
            </h1>
              <ul className="flex flex-wrap gap-2 mt-2">
                <li className="px-2 py-1 bg-red-500 text-white text-center rounded-lg">
                  Docker
                </li>
                <li className="px-2 py-1 bg-blue-500 text-white text-center rounded-lg">
                  IoT
                </li>
                <li className="px-2 py-1 bg-yellow-500 text-white text-center rounded-lg">
                  JS
                </li>
                <li className="px-2 py-1 bg-blue-500 text-white text-center rounded-lg">
                  TypeScript
                </li>
                <li className="px-2 py-1 bg-teal-500 text-white text-center rounded-lg">
                  Tailwind CSS
                </li>
                <li className="px-2 py-1 bg-purple-500 text-white text-center rounded-lg">
                  mqtt
                </li>
                <li className="px-2 py-1 bg-gray-800 text-white text-center rounded-lg">
                  Next JS
                </li>
                <li className="px-2 py-1 bg-blue-600 text-white text-center rounded-lg">
                  React JS
                </li>
                <li className="px-2 py-1 bg-orange-500 text-white text-center rounded-lg">
                  Java
                </li>
                <li className="px-2 py-1 bg-green-500 text-white text-center rounded-lg">
                  Spring
                </li>
                <li className="px-2 py-1 bg-green-500 text-white text-center rounded-lg">
                  MongoDB
                </li>
            </ul>
          </div>
        </div>
        <main className="flex gap-x-10 mt-10">
          <div className="w-2/6">
            <strong className="text-xl font-medium">
              Detalles de contacto
            </strong>
            <ul className="mt-2 mb-10">
              <li className="px-2 mt-1">
                <strong className="mr-1 text-2xl font-bold">E-mail </strong>
                <a href="mailto:" className="block">
                  agustin_g08@hotmail.com
                </a>
              </li>
              <li className="px-2 mt-1">
                <strong className="mr-1 text-2xl font-bold">Ubicación</strong>
                <span className="block">
                  Ciudad Autónoma de Buenos Aires, Argentina
                </span>
              </li>
            </ul>
            <h2 className="text-xl font-medium underline">Tecnologías</h2>
            <br />
            <strong className="text-xl font-medium">Front-End</strong>


            <strong className="text-xl font-medium">Back-End</strong>

            <strong className="text-xl font-medium">Further Education</strong>
            <ul className="mt-2 mb-10">
              <li className="px-2 mt-1">Like Lion Frontend School</li>
              <li className="px-2 mt-1">Udemy</li>
              <li className="px-2 mt-1">Freecodecamp</li>
            </ul>
            <strong className="text-xl font-medium">Currently learning</strong>
            <ul className="mt-2 mb-10">
              <li className="px-2 mt-1">About Web Accessibility</li>
              <li className="px-2 mt-1">and User Experience</li>
            </ul>
            <strong className="text-xl font-medium">Interests & Hobbies</strong>
            <ul className="mt-2">
              <li className="px-2 mt-1">Sustainability</li>
              <li className="px-2 mt-1">New technologies</li>
              <li className="px-2 mt-1">Blogging on dev.to</li>
              <li className="px-2 mt-1">Investment</li>
              <li className="px-2 mt-1">Travel</li>
            </ul>
          </div>

          <div className="w-4/6">
            <section>
              <h2 className="text-2xl pb-1 border-b font-semibold">About</h2>
              <p className="mt-4 text-xs">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Possimus deserunt modi qui. Dolorum aliquid quasi velit
                cupiditate officia magnam impedit, sapiente hic, eaque quaerat
                ullam fugiat reprehenderit voluptates odit! Error. Tempore fuga
                iusto eveniet omnis impedit repellat ab repellendus nesciunt
                similique. Iure voluptates, enim nesciunt tempora amet earum,
                porro rem ad et sequi corrupti neque quidem? Debitis quo
                quibusdam nemo. Nam doloremque perferendis tempora asperiores,
                ullam praesentium et, voluptas pariatur illo aliquid similique,
                fugiat repellendus ipsa necessitatibus minus hic culpa quasi.
                Sed voluptate itaque accusantium earum cupiditate ipsa neque
                magnam!
              </p>
            </section>

            <section>
              <h2 className="text-2xl mt-6 pb-1 border-b font-semibold">
                Work Experiences
              </h2>
              <ul className="mt-2">
                <li className="pt-2">
                  <p className="flex justify-between text-sm">
                    <strong className="text-base">Company Name</strong>2019-2021
                  </p>
                  <p className="flex justify-between text-base">
                    Job title<small>location</small>
                  </p>
                  <p className="text-justify text-xs">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolorum, expedita exercitationem, cum quisquam laboriosam
                    voluptas aut libero officiis quae natus laborum explicabo,
                    labore nobis porro ad et soluta deleniti. Rerum?
                    Voluptatibus id officiis adipisci eligendi provident minima
                    sed. Ullam aliquid, fuga nisi modi amet quasi, quod veniam
                    eos sit culpa distinctio rem a tempora ad autem soluta
                    rerum, doloremque quas?
                  </p>
                </li>
                <li className="pt-2">
                  <p className="flex justify-between text-sm">
                    <strong className="text-base">Company Name</strong>2014-2019
                  </p>
                  <p className="flex justify-between text-base">
                    Job title<small>location</small>
                  </p>
                  <p className="text-justify text-xs">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Delectus nemo fugiat neque tempore consectetur nihil alias
                    ullam esse corporis fugit deserunt maxime, numquam eos
                    repellendus, deleniti quae at fuga repudiandae! Perspiciatis
                    odit nobis sunt! Natus ea reiciendis enim! Itaque possimus
                    eaque perspiciatis architecto reiciendis laboriosam voluptas
                    corporis unde ducimus quis aliquid, distinctio dolorum quo
                    ullam a at, fugit veniam optio.
                  </p>
                </li>
              </ul>
            </section>
            <section>
              <h2 className="text-2xl mt-6 pb-1 border-b font-semibold">
                Education
              </h2>
              <ul className="mt-2">
                <li className="pt-2">
                  <p className="flex justify-between text-sm">
                    <strong className="text-base">Hello Univerisity</strong>
                    2022-2019
                  </p>
                  <p className="flex justify-between text-sm">
                    Digital marketing<small>GPA 4.0</small>
                  </p>
                </li>
                <li className="pt-2">
                  <p className="flex justify-between text-sm">
                    <strong className="text-base">World Univerisity</strong>
                    2022-2019
                  </p>
                  <p className="flex justify-between text-sm">
                    Fashion Design<small>GPA 3.8</small>
                  </p>
                </li>
              </ul>
            </section>
          </div>
        </main>

        <footer className="mt-6">
          <p className="bg-gray-600 text-white text-center text-xs pt-2">
            The best way to predict the future is to create it.{" "}
            <small>- AbrahamLincoln</small>
          </p>
          <p className="bg-gray-600 text-white text-center text-sm pb-2">
            I am creating my future by learning new things and making small
            progresses everyday.
          </p>
        </footer>
      </div>
    </div>
  );
}
