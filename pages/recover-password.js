import React, { useState } from 'react';
import Link from 'next/link'; // Asegúrate de importar Link desde next/link

const RecoverPassword = () => {
  const [email, setEmail] = useState('');
  const [captchaResponse, setCaptchaResponse] = useState('');
  const [showCaptcha, setShowCaptcha] = useState(false);
  

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validar el captcha
    if (!captchaResponse) {
      alert('Por favor, complete el captcha.');
      return;
    }

    // Enviar la solicitud de recuperación de contraseña al servidor
    try {
      const response = await fetch('/api/recover-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, captchaResponse }),
      });

      if (response.ok) {
        alert('Se ha enviado un correo electrónico con instrucciones para restablecer tu contraseña.');
      } else {
        alert('No se pudo procesar la solicitud.');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <h1>Recuperar Contraseña</h1>
      <form onSubmit={handleSubmit}>
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        
        {showCaptcha && (
          // Renderizar el captcha aquí (puedes utilizar reCAPTCHA)
          <div>
            {/* Captcha */}
            <input type="text" value={captchaResponse} onChange={(e) => setCaptchaResponse(e.target.value)} />
          </div>
        )}

        <button type="submit">Recuperar Contraseña</button>
        <div className="text-center mt-3">
        <Link legacyBehavior to="/signup" className="text-success">Back to Sign In</Link>
        </div>
      </form>
    </div>
  );
};

export default RecoverPassword;
