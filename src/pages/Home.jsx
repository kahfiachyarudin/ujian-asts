import React from "react";
import { Link } from "react-router";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

function Home() {
  const faqData = [
    {
      id: 1,
      question: "Cara mendaftar akun",
      answer: "Petunjuk langkah demi langkah untuk mendaftarkan akun",
    },
    {
      id: 2,
      question: "Metode Pembayaran",
      answer: "Kami menerima pembayaran melalui berbagai metode yang tersedia.",
    },
    {
      id: 3,
      question: "Kebijakan pengembalian",
      answer:
        "Informasi tentang kebijakan pengembalian dan prosedur yang berlaku.",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="mb-8">
        <p className="mb-2 text-sm font-medium text-primary">Pusat Bantuan</p>
        <h2 className="text-3xl font-bold tracking-tight text-foreground">
          Pertanyaan Umum
        </h2>
        <p class="mt-2 max-w-2xl text-sm leading-6 text-muted-foreground">
          Temukan jawaban dari pertanyaan yang sering ditanyakan.
        </p>
      </div>
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {faqData.map((item, index) => (
          <Link to={`/detail/${item.id}`} key={item.id} className="group">
            <Card className="h-full border-border/60 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg">
              <CardHeader>
                <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-sm font-bold text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <CardTitle className="text-lg leading-6 transition-colors group-hover:text-primary">
                  {item.question}
                </CardTitle>
              </CardHeader>

              <CardContent>
                <p className="line-clamp-3 text-sm leading-6 text-muted-foreground">
                  {item.answer}
                </p>

                <div className="mt-5 flex items-center text-sm font-medium text-primary">
                  Lihat detail
                  <span className="ml-1 transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Home;
