import BoxReveal from "@/components/ui/box-reveal";

export async function HealthArticle() {
  return (
    <div className="size-full items-center justify-center overflow-hidden pt-8 max-w-[80vw] mx-auto">
      <BoxReveal boxColor={"#e51d15"} duration={1}>
        <div>
          <p className="text-3xl sm:text-4xl font-semibold">
            Every Year, Millions of Lives Are Lost Because Critical Medical Data Isn't Accessible in Time. <span className="text-red-600 font-bold">OpenTag</span> Lets You Change That—With Just a QR Code.
          </p>
        </div>
      </BoxReveal>

      <BoxReveal boxColor={"#e51d15"} duration={1}>
        <p className="mt-6 text-xl sm:text-2xl">
          Every second counts in an emergency. When medical responders lack access to vital information like your blood type, allergies, or medical history, lives can hang in the balance. With OpenTag, a free and open-source solution, you can ensure your critical medical data is available instantly through a simple QR code. Accessible, customizable, and built to save lives—OpenTag empowers everyone to make a difference.
        </p>
      </BoxReveal>

    </div>
  );
}
