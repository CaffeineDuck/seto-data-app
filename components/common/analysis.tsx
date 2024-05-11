type Props = {
  text: string;
};

export default function AnalysisComponent({ text }: Props) {
  return (
    <div className="min-h-[5vh] rounded-lg border p-5">
      <span className="h-fit w-fit rounded-full border bg-green-600 px-3 py-1 text-xs font-medium text-white">
        Analysis
      </span>
      <span className="pl-2">{text}</span>
    </div>
  );
}
