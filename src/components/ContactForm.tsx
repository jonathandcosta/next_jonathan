'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { FiAlertCircle, FiCheck } from 'react-icons/fi';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) newErrors.name = 'Nome é obrigatório';
    if (!formData.email.trim()) {
      newErrors.email = 'Email é obrigatório';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email inválido';
    }
    if (!formData.message.trim()) newErrors.message = 'Mensagem é obrigatória';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const phoneNumber = '558499043539'; // Seu número com DDI
    const whatsappMessage = `
*Nova mensagem do portfólio*
      
*Nome:* ${formData.name}
*Email:* ${formData.email}
      
*Mensagem:*
${formData.message}
    `.trim();

    window.open(
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`,
      '_blank'
    );

    setStatus('success');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      className="bg-white p-8 rounded-xl shadow-lg border border-gray-200"
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Campo Nome */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Nome Completo
          </label>
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition ${errors.name ? 'border-red-500' : 'border-gray-300'
              }`}
            placeholder="Seu nome"
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
              <FiAlertCircle /> {errors.name}
            </p>
          )}
        </div>

        {/* Campo Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition ${errors.email ? 'border-red-500' : 'border-gray-300'
              }`}
            placeholder="seu@email.com"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
              <FiAlertCircle /> {errors.email}
            </p>
          )}
        </div>

        {/* Campo Mensagem */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
            Mensagem
          </label>
          <textarea
            id="message"
            rows={4}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition ${errors.message ? 'border-red-500' : 'border-gray-300'
              }`}
            placeholder="Descreva seu projeto ou dúvida..."
          ></textarea>
          {errors.message && (
            <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
              <FiAlertCircle /> {errors.message}
            </p>
          )}
        </div>

        {/* Feedback */}
        {status === 'success' && (
          <div className="p-3 bg-green-50 text-green-700 rounded-lg flex items-center gap-2">
            <FiCheck /> Mensagem enviada com sucesso! Verifique seu WhatsApp.
          </div>
        )}

        {/* Botão de enviar */}
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition duration-300 transform hover:scale-[1.02]"
        >
          Enviar para WhatsApp
        </button>
      </form>
    </motion.div>
  );
}