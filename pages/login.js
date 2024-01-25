import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router'; // Importa el useRouter


export default function Login() {
  const [showEmailForm, setShowEmailForm] = useState(true);
  const [email, setEmail] = useState('');
  const [showPasswordForm, setShowPasswordForm] = useState(false);
  const [password, setPassword] = useState('');
  const [useEmailOTP, setUseEmailOTP] = useState(false);
  const router = useRouter();

  const handleNextClick = () => {
    if (showEmailForm) {
      setShowEmailForm(false);
      setShowPasswordForm(!useEmailOTP);
    } else {
      // Aquí puedes realizar la acción de inicio de sesión con el correo y la contraseña o con OTP de correo electrónico
      // Por ahora, simplemente muestra un mensaje de inicio de sesión exitoso
      router.push('/pre-diagnostico');
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleToggleUseEmailOTP = () => {
    setUseEmailOTP(!useEmailOTP);
  };

  const handleForgotPassword = () => {
    // Agrega aquí la lógica para manejar la recuperación de contraseña
    // Por ejemplo, puedes mostrar un modal o redirigir a una página de recuperación de contraseña.
  };

  return (
    <div className="container mx-auto my-4">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card">
            <div className="card-body text-center">
              <img
                className="mb-4 mx-auto h-12 w-auto max-w-xs"
                src="/logo.png"
                alt="Community Lab Alliance" style={{ maxWidth: '200px' }}
              />
              <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                Sign in
              </h2>
              <h6 className="mb-4 text-gray-500">
                to access Community Lab Alliance
              </h6>
              <form className="mt-8 space-y-6" action="#" method="POST">
                {showEmailForm && (
                  <div className="rounded-md shadow-sm -space-y-px">
                    <div>
                      <input
                        aria-label="Email address"
                        name="email"
                        type="email"
                        required
                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                        placeholder="Email Address"
                        value={email}
                        onChange={handleEmailChange}
                      />
                    </div>
                  </div>
                )}
                {showPasswordForm && !useEmailOTP && (
                  <div className="rounded-md shadow-sm -space-y-px">
                    <div>
                      <input
                        aria-label="Password"
                        name="password"
                        type="password"
                        required
                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                        placeholder="Password"
                        value={password}
                        onChange={handlePasswordChange}
                      />
                    </div>
                  </div>
                )}
                <div className="flex justify-center">
                  <button
                    type="button"
                    className="py-2 px-4 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-500 rounded-md"
                    style={{ backgroundColor: '#3C928A' }}
                    onClick={handleNextClick}
                  >
                    {showEmailForm ? 'Next' : 'Sign in'}
                  </button>
                </div>
              </form>
              {showPasswordForm && (
                <div className="text-center mt-4">
                  <button
                    type="button"
                    className="text-indigo-600 hover:text-indigo-500 font-medium"
                    onClick={handleToggleUseEmailOTP}
                  >
                    {useEmailOTP ? 'Use Password' : 'Sign in using email OTP'}
                  </button>
                </div>
              )}
            </div>
            <div className="text-sm text-center mt-4">
              <p>
                Don’t have an account?{' '}
                <Link legacyBehavior href="/signup">
                  <a className="font-medium text-indigo-600 hover:text-indigo-500 text-green-500">
                    Sign Up
                  </a>
                </Link>
              </p>
              <Link legacyBehavior href="/recover-password">
                <a className="btn btn-link text-success">Forgot Password</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>


  );
}
