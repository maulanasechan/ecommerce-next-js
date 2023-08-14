import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className=" w-full h-full flex flex-col items-center justify-center gap-5 ">
      <p>Hello Admin</p>
      <Button variant="destructive">Click me</Button>
    </div>
  );
}
