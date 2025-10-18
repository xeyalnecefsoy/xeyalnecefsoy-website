"use client";

import React from "react";

// Form girişlərinin state tipini təyin edirik
interface FormData {
  name: string;
  email: string;
  message: string;
}

const Contact: React.FC = () => {
  // Form dataları üçün state
  const [formData, setFormData] = React.useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  // Şəkildəki tünd göy rəng üçün təxmin
  const darkBlue = "#14365d";

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Form göndərmə (submit) məntiqi bura əlavə olunacaq
    console.log("Form Göndərildi:", formData);

    // Nümunə: alert('Müraciətiniz uğurla göndərildi!');
    // Real layihədə bu hissədə API çağırışı (məsələn, Next.js API Route) olmalıdır.
  };

  // Form inputlarının standart stilini təyin edirik
  const inputStyle = `w-full p-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150 placeholder-gray-400 bg-white shadow-sm`;

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Başlıq */}
        <h2
          className="text-4xl sm:text-5xl font-extrabold mb-4 uppercase tracking-widest"
          style={{ color: darkBlue }}
        >
          ƏLAQƏ
        </h2>

        {/* Alt Başlıq */}
        <p className="text-gray-600 text-lg mb-12">
          Müraciətlər 24 saat ərzində cavablandırılır
        </p>

        {/* Əlaqə Forması */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Adınız */}
          <div>
            <input
              type="text"
              name="name"
              placeholder="Adınız"
              value={formData.name}
              onChange={handleChange}
              className={inputStyle}
              required
            />
          </div>

          {/* E-poçt Ünvanınız */}
          <div>
            <input
              type="email"
              name="email"
              placeholder="E-poçt ünvanınız"
              value={formData.email}
              onChange={handleChange}
              className={inputStyle}
              required
            />
          </div>

          {/* Müraciətiniz (Textarea) */}
          <div>
            <textarea
              name="message"
              placeholder="Müraciətiniz"
              rows={6}
              value={formData.message}
              onChange={handleChange}
              className={`${inputStyle} resize-none`} // resize-none əlavə edirik
              required
            />
          </div>

          {/* Göndər Düyməsi */}
          <button
            type="submit"
            className="w-40 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 shadow-md"
          >
            Göndər
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
