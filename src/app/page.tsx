"use client";
import Head from "next/head";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const agreeBtn = document.querySelector(".bg-green-500");
    const rescheduleBtn = document.querySelector(".bg-gray-200");

    agreeBtn?.addEventListener("click", () => {
      alert("Cảm ơn Hoan đã đồng ý! Duy sẽ liên hệ với Hoan sớm nhé!");
    });

    rescheduleBtn?.addEventListener("click", () => {
      alert(
        "Không sao đâu! Hãy nhắn tin cho Duy để sắp xếp lại lịch trình nhé!"
      );
    });
  }, []);
  return (
    <>
      <Head>
        <title>Lời mời foodtour Sài Gòn</title>
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&family=Montserrat:wght@400;600&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div className="min-h-screen flex flex-col font-montserrat bg-[#fef9f8]">
        <header className="bg-gradient-to-r from-red-400 to-pink-500 py-6 text-white shadow-lg">
          <div className="container mx-auto px-4 flex justify-between items-center">
            <h1 className="text-3xl font-bold font-dancing">
              Foodtour Sài Gòn
            </h1>
            <div className="hidden md:block">
              <i className="fas fa-utensils text-xl mr-3"></i>
              <i className="fas fa-ice-cream text-xl mr-3"></i>
              <i className="fas fa-microphone text-xl"></i>
            </div>
          </div>
        </header>

        <main className="flex-grow container mx-auto px-4 py-8">
          <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative h-64 overflow-hidden">
              <img
                src="/api/placeholder/1200/400"
                alt="Sài Gòn đẹp"
                className="w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <h2 className="text-3xl font-bold font-dancing">Chào Hoan</h2>
                  <p className="mt-2">
                    Cùng khám phá ẩm thực Sài Gòn cuối tuần này nhé!
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6">
              <div className="mb-8">
                <p className="text-gray-700 leading-relaxed">
                  Mình là Hồ Quốc Duy đây. Sau những ngày nằm ề ra lướt TikTok,
                  Duy nhận ra Sài Gòn mình có quá chừng món ngon nhưng mà ăn một
                  mình thì buồn lắm. Nhân dịp cuối tuần này trời đẹp trong xanh,
                  gió mát, Duy muốn rủ Hoan đi dạo quanh Sài Gòn làm chuyến
                  foodtour thiệt chill.
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4 text-pink-600">
                  <i className="fas fa-map-marked-alt mr-2"></i>Lịch trình dự
                  kiến:
                </h3>
                <div className="border-l-2 border-pink-400 pl-5 relative">
                  {[
                    {
                      time: "17:30",
                      text: "Duy qua rước Hoan",
                    },
                    {
                      time: "18:00",
                      text: "Món ăn Hàn Quốc",
                    },
                    {
                      time: "19:30",
                      text: "Bingsu hoặc kem",
                    },
                    {
                      time: "20:00",
                      text: "Karaoke",
                    },
                    {
                      time: "22:00",
                      text: "Đưa Hoan về nhà an toàn",
                    },
                  ].map((item, idx) => (
                    <div key={idx} className="relative mb-6 pl-2">
                      <div className="absolute left-[-29px] top-[6px] w-4 h-4 rounded-full bg-pink-400"></div>
                      <span className="font-bold text-pink-500">
                        {item.time}
                      </span>
                      <p className="text-black">{item.text}</p>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-gray-600 italic mt-4">
                  Lịch trình có thể linh hoạt đổi nếu có gì phát sinh nghen, Duy
                  không cứng nhắc đâu.
                </p>
              </div>

              <div className="mb-8 bg-pink-50 p-4 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-pink-600 flex items-center">
                  <i className="fas fa-reply mr-2"></i>Phản hồi
                </h3>
                <p className="text-gray-700">
                  Nếu Hoan thấy okie với kế hoạch trên, đừng quên phản hồi lại
                  cho Duy biết nha.
                </p>
                <div className="mt-6 flex space-x-4 justify-center">
                  <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-full transition duration-300 shadow-md">
                    <i className="fas fa-check mr-2"></i>Đồng ý
                  </button>
                  <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-6 py-2 rounded-full transition duration-300 shadow-md">
                    <i className="fas fa-calendar-alt mr-2"></i>Đổi ngày
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-red-400 to-pink-500 p-6 text-white text-center">
              <p className="font-dancing text-xl">
                Chúc Hoan một ngày ngọt ngào như lớp kem macchiato trên ly trà
                sữa olong
              </p>
              <p className="mt-2">Thân, Duy nè</p>
              <div className="mt-4 animate-bounce">
                <i className="fas fa-heart text-2xl text-white"></i>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
