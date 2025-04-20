import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState<number>(0)
  const [matricula, setMatricula] = useState<string>('')
  const [resultado, setResultado] = useState<string | null>(null)
  const [showLoginModal, setShowLoginModal] = useState<boolean>(false)
  const [showRegisterModal, setShowRegisterModal] = useState<boolean>(false)
  
  // Arreglo de matrículas autorizadas (puedes modificarlo según tus necesidades)
  const matriculasAutorizadas = ['ABC123', 'XYZ789', 'DEF456']
  
  const handleMatriculaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMatricula(e.target.value)
  }
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Normalizar la matrícula (convertir a mayúsculas y eliminar espacios)
    const matriculaNormalizada = matricula.trim().toUpperCase()
    // Verificar si la matrícula está en la lista de autorizadas
    const estaAutorizado = matriculasAutorizadas.includes(matriculaNormalizada)
    // Establecer el resultado de la consulta
    setResultado(estaAutorizado ? 'Vehículo autorizado' : 'Vehículo sin registrar >> se dará aviso a la grúa para su remoción')
    // Incrementar el contador de consultas
    setCount(prevCount => prevCount + 1)
  }
  
  // Manejo de modales
  const openLoginModal = () => {
    setShowLoginModal(true)
    setShowRegisterModal(false)
  }
  
  const openRegisterModal = () => {
    setShowRegisterModal(true)
    setShowLoginModal(false)
  }
  
  const closeModals = () => {
    setShowLoginModal(false)
    setShowRegisterModal(false)
  }
  
  return (
    <div>
      {/* Barra de navegación con botones de login y register */}
      <div style={{
        display: 'flex',
        justifyContent: 'flex-end',
        borderRadius: '8px',
        padding: '15px',
        backgroundColor: '#f8f9fa',
        borderBottom: '1px solid #ddd'
      }}>
        <button 
          onClick={openLoginModal}
          style={{
            marginRight: '10px',
            padding: '8px 16px',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '14px'
          }}
        >
          Login
        </button>
        <button 
          onClick={openRegisterModal}
          style={{
            padding: '8px 16px',
            backgroundColor: '#28a745',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '14px'
          }}
        >
          Register
        </button>
      </div>
      
      <div>
          <h1>Urbanización Parquesierra</h1>
      </div>
      <p>App para identificar vehículos autorizados, introduzca los datos:</p>
      <form
        onSubmit={handleSubmit}
        style={{
          display: 'flex',
          flexDirection: 'column',
          maxWidth: '400px',
          margin: '0 auto',
          padding: '20px',
          backgroundColor: '#f0f0f0',
          borderRadius: '10px',
          boxShadow: '0 4px 6px rgba(35, 34, 34, 0.1)'
        }}
      >
        <div style={{
          marginBottom: '15px'
        }}>
          <label
            htmlFor="matricula"
            style={{
              display: 'block',
              marginBottom: '5px',
              fontWeight: 'bold',
              color: '#333'
            }}
          >
            Matrícula del Vehículo:
          </label>
          <input
            type="text"
            id="matricula"
            value={matricula}
            onChange={handleMatriculaChange}
            placeholder="Ingrese la matrícula"
            required
            style={{
              width: '94%',
              padding: '10px',
              border: '2px solid #ddd',
              borderRadius: '5px',
              fontSize: '16px'
            }}
          />
        </div>
        <button
          type="submit"
          style={{
            padding: '10px 15px',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            fontSize: '16px',
            transition: 'background-color 0.3s ease'
          }}
          onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#0056b3'}
          onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#007bff'}
        >
          Consultar Matrícula
        </button>
      </form>
      
      {/* Mostrar resultado de la consulta */}
      {resultado && (
        <div style={{
          marginTop: '20px',
          padding: '5px',
          backgroundColor: resultado === 'Vehículo autorizado' ? '#e6f3e6' : '#f3e6e6',
          color: resultado === 'Vehículo autorizado' ? 'green' : 'red',
          border: '3px solid',
          borderColor: resultado === 'Vehículo autorizado' ? 'green' : 'red',
          borderRadius: '10px',
          fontSize: '16px',
        }}>
          {resultado}
        </div>
      )}
      
      <div className="card">
        <p>
          Cantidad de consultas: {count}
        </p>
      </div>
      
      <p className="read-the-docs" >
        <a href="https://react.dev" target="_blank">
        Pincha aquí para más información</a>
      </p>
      
      {/* Modal de Login */}
      {showLoginModal && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 1000
        }}>
          <div style={{
            backgroundColor: 'white',
            padding: '20px',
            borderRadius: '5px',
            width: '300px'
          }}>
            <h2>Iniciar Sesión</h2>
            <form style={{
              display: 'flex',
              flexDirection: 'column'
            }}>
              <label style={{ marginBottom: '5px' }}>
                Usuario:
                <input type="text" style={{
                  width: '90%',
                  padding: '8px',
                  marginBottom: '10px',
                  border: '1px solid #ddd',
                  borderRadius: '4px'
                }} />
              </label>
              <label style={{ marginBottom: '5px' }}>
                Contraseña:
                <input type="password" style={{
                  width: '90%',
                  padding: '8px',
                  marginBottom: '15px',
                  border: '1px solid #ddd',
                  borderRadius: '4px'
                }} />
              </label>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between'
              }}>
                <button type="button" onClick={closeModals} style={{
                  padding: '8px 16px',
                  backgroundColor: '#dc3545',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer'
                }}>
                  Cancelar
                </button>
                <button type="submit" style={{
                  padding: '8px 16px',
                  backgroundColor: '#007bff',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer'
                }}>
                  Entrar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      
      {/* Modal de Registro */}
      {showRegisterModal && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 1000
        }}>
          <div style={{
            backgroundColor: 'white',
            padding: '20px',
            borderRadius: '5px',
            width: '300px'
          }}>
            <h2>Registrarse</h2>
            <form style={{
              display: 'flex',
              flexDirection: 'column'
            }}>
              <label style={{ marginBottom: '5px' }}>
                Nombre:
                <input type="text" style={{
                  width: '90%',
                  padding: '8px',
                  marginBottom: '10px',
                  border: '1px solid #ddd',
                  borderRadius: '4px'
                }} />
              </label>
              <label style={{ marginBottom: '5px' }}>
                Email:
                <input type="email" style={{
                  width: '90%',
                  padding: '8px',
                  marginBottom: '10px',
                  border: '1px solid #ddd',
                  borderRadius: '4px'
                }} />
              </label>
              <label style={{ marginBottom: '5px' }}>
                Contraseña:
                <input type="password" style={{
                  width: '90%',
                  padding: '8px',
                  marginBottom: '10px',
                  border: '1px solid #ddd',
                  borderRadius: '4px'
                }} />
              </label>
              <label style={{ marginBottom: '5px' }}>
                Confirmar Contraseña:
                <input type="password" style={{
                  width: '90%',
                  padding: '8px',
                  marginBottom: '15px',
                  border: '1px solid #ddd',
                  borderRadius: '4px'
                }} />
              </label>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between'
              }}>
                <button type="button" onClick={closeModals} style={{
                  padding: '8px 16px',
                  backgroundColor: '#dc3545',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer'
                }}>
                  Cancelar
                </button>
                <button type="submit" style={{
                  padding: '8px 16px',
                  backgroundColor: '#28a745',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer'
                }}>
                  Registrarse
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

export default App