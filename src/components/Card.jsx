export default function Card({ title, text }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 border-l-8 border-secondary hover:shadow-xl transition">
      <h3 className="text-2xl font-bold text-primary mb-2">{title}</h3>
      <p className="text-gray-700">{text}</p>
    </div>
  );
}
