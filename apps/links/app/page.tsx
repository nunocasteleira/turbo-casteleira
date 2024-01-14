import React from "react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 [&_*]:min-w-0">
      <div className="flex flex-col bg-slate-200 text-slate-900 max-w-md rounded-lg overflow-hidden">
        <div className="flex-auto w-full h-full">
          <div className="aspect-[4/3] relative w-full h-full">
            <Image
              className="object-cover w-full h-full"
              fill
              src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?faceindex=1q=80&w=800&auto=format&fit=crop&crop=faces&max-h=600"
              alt="Headshot of Nuno João Casteleira"
            />
          </div>
        </div>
        <div className="flex-auto w-full min-h-full py-4 px-8">
          <h1 className="text-2xl font-semibold">Nuno João Casteleira</h1>
          <div className="p-1"></div>
          <p className="font-light leading-6">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis,
            cumque nulla quasi repellendus temporibus ullam. Eveniet facilis
            illo natus nihil nisi officia similique, unde vero. Explicabo fugiat
            hic quisquam voluptatem.
          </p>
          <div>
            <ul className="flex flex-row">
              <SocialLink>X</SocialLink>
              <SocialLink>github</SocialLink>
              <SocialLink>Linkedin</SocialLink>
              <SocialLink>photos</SocialLink>
              <SocialLink>projects</SocialLink>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}

function SocialLink({
  children,
  href,
}: {
  children: React.ReactNode;
  href?: string;
}) {
  return <li className="p-4 rounded-full">{children}</li>;
}
