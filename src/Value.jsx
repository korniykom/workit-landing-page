import ValueSection from "./ValueSection";

export default function Value() {
  return (
    <section className="mt-[32px]">
      <ValueSection
        number={1}
        title={"Actionable insights"}
        description={
          "Optimize your products, improve customer satisfaction and stay ahead of the competition with our product data analytics."
        }
      />
      <ValueSection
        number={2}
        title={"Data-driven decisions"}
        description={
          "Make data-driven decisions with our product data analytics. Our AI-generated reports help you unlock insights hidden in your product data."
        }
      />
      <ValueSection
        number={3}
        title={"Always affordable"}
        description={
          "Always affordable pricing that scales with your business. Get top-quality product data analytics services without hidden costs or unexpected fees."
        }
      />
    </section>
  );
}
