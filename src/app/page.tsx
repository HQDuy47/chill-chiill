// "use client";
import Head from "next/head";
// import { useEffect } from "react";
import Image from "next/image";

export default function Home() {
  // useEffect(() => {
  //   const agreeBtn = document.querySelector(".bg-green-500");
  //   const rescheduleBtn = document.querySelector(".bg-gray-200");

  //   agreeBtn?.addEventListener("click", () => {
  //     alert("Cảm ơn Hoan đã đồng ý! Duy sẽ liên hệ với Hoan sớm nhé!");
  //   });

  //   rescheduleBtn?.addEventListener("click", () => {
  //     alert(
  //       "Không sao đâu! Hãy nhắn tin cho Duy để sắp xếp lại lịch trình nhé!"
  //     );
  //   });
  // }, []);
  return (
    <>
      <Head>
        <title>Foodtour Sài Gòn | Hồ Quốc Duy</title>
        <meta
          name="description"
          content="Lời mời tham gia chuyến foodtour Sài Gòn cùng Duy cuối tuần này. Cùng nhau khám phá những món ăn ngon và tạo nên kỷ niệm đáng nhớ."
        />
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&family=Montserrat:wght@400;600&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div className="min-h-screen flex flex-col font-montserrat bg-[#fff9ed] ">
        <main className="mx-auto pt-10 w-full max-w-5xl ">
          {/* Header */}
          <div className="flex items-center justify-between px-4 text-[#808080]">
            <div className="flex gap-20 items-center italic font-semibold">
              <div>Porfolio</div>
              <div>Services</div>
            </div>
            <Image
              src="/images/head-cat.png"
              alt="Cat"
              width={80}
              height={80}
            />
            <div className="flex gap-20 items-center italic font-semibold">
              <div>Contact</div>
              <div>About</div>
            </div>
          </div>

          {/* Main content */}
          <div className="flex flex-col items-center justify-between px-4 py-24 text-center">
            <h1 className="font-semibold text-6xl text-[#787878] antialiased italic">
              Chào Hoan
            </h1>
            <p className="mt-8 text-[#787878] text-2xl font-semibold max-w-2xl leading-9">
              Nhân dịp cuối tuần này trời đẹp trong xanh, gió mát, Duy muốn rủ
              Hoan đi dạo quanh Sài Gòn làm chuyến foodtour thiệt chill.
            </p>
            <div className="mt-14 flex gap-4 text-xl font-semibold italic">
              <button className="py-4 px-12 bg-[#fc9b9b] text-center rounded-2xl text-2xl cursor-pointer hover:bg-[#fc9b9b]/80 text-white">
                Hire Us
              </button>
              <button className="py-4 px-12 border-2 border-[#fc9b9b] text-[#fc9b9b] rounded-2xl text-center text-2xl cursor-pointer hover:bg-[#ff7f4e]/10">
                Our Work
              </button>
            </div>
          </div>
          {/* Lịch trình */}
          <h2 className="mt-12 text-5xl font-bold text-[#fc9b9b] mb-6 text-center">
            Lịch trình dự kiến
          </h2>
          <div className="mt-8 flex flex-col items-center justify-center px-4 py-12 text-start  rounded-lg ">
            <ul className="border-l-2 border-[#fc9b9b] pl-5 mb-6">
              {[
                { time: "17:30", text: "Duy qua rước Hoan" },
                { time: "18:00", text: "Ăn tối tại quán MamaThai" },
                {
                  time: "19:30",
                  text: "Trà sữa hoặc tô tượng tại Nhà sách Hải An / U-Tea Trần Đình Xu",
                },
                { time: "21:00 ~ 22:00", text: "Đưa Hoan về nhà an toàn" },
              ].map((item, idx) => (
                <li key={idx} className="mb-4 relative pl-2 text-xl">
                  <div className="absolute left-[-29px] top-[6px] w-4 h-4 rounded-full bg-[#fc9b9b]"></div>
                  <span className="font-bold text-[#fc9b9b]">{item.time}</span>
                  <p className="text-black">{item.text}</p>
                </li>
              ))}
            </ul>
            <p className="mt-10 text-[#787878] italic text-lg">
              (Lịch trình có thể linh hoạt đổi nếu có gì phát sinh nghen, Duy
              không cứng nhắc đâu 😌)
            </p>
          </div>

          {/* Phản hồi */}

          <h2 className="mt-12 text-4xl font-bold text-[#fc9b9b] mb-6 text-center">
            Phản hồi nè
          </h2>
          <div className="mt-8 flex flex-col items-center justify-center px-4 py-12 text-start bg-[#fff4e6] rounded-lg shadow-md max-w-4xl mx-auto">
            <p className="text-[#787878]  mb-4 text-xl max-w-2xl text-center">
              Nếu Hoan thấy okie với kế hoạch trên, đừng quên phản hồi lại cho
              Duy biết nha 💌
            </p>
            <div className="flex space-x-4 justify-center mt-2">
              <button className="py-2 px-5 bg-green-500 text-center rounded-2xl text-base cursor-pointer hover:bg-green-400 text-white">
                Đồng ý
              </button>
              {/* <button className="py-2 px-5 bg-gray-500 text-center rounded-2xl text-base cursor-pointer hover:bg-green-600 text-white">
                Đổi ngày
              </button> */}
              {/* <button className="py-2 px-5 border-2 border-gray-500 text-green-500 rounded-2xl text-center text-base cursor-pointer hover:bg-green-100">
                Đổi ngày
              </button> */}
            </div>
          </div>
        </main>
        <div className="mt-14 flex items-center justify-center px-4  text-center">
          {/* <Image src="/images/cat.png" alt="Cat" width={80} height={80} />
            // <Image src="/images/cat.png" alt="Cat" width={80} height={80} /> */}
          {/* <Image src="/images/cats.png" alt="Cat" width={400} height={500} /> */}
          {/* <Image src="/images/cat.png" alt="Cat" width={80} height={80} />
            <Image src="/images/cat.png" alt="Cat" width={80} height={80} /> */}
        </div>
      </div>
    </>
  );
}
