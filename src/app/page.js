import Counter from "@/components/Counter";
import HeaderPage from "@/components/Header";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      
        <HeaderPage></HeaderPage>
        <Counter></Counter>
        
    </div>
  );
}
