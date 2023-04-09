import { useForm } from 'react-hook-form'
import {z} from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

interface ModalProps {
  isOpen: boolean;
  setModalOpen: () => void;
  chavePix: string;
  valor: string;
  senha: string;
  agencia: string;
  conta: string;
  valorEnviar: string;
  senha2: string;
}

const BACKGROUND_STYLE2: React.CSSProperties = {
  position: 'fixed',
  top: '0',
  bottom: '0',
  left: '0',
  right: '0',
  backgroundColor: 'rgb(0,0,0, 0.7)',
  zIndex: 1000,
};

const MODAL_STYLE2: React.CSSProperties = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%,-50%)',
  padding: '190px',
  backgroundColor: '#fff',
  borderRadius: '10px',
  color: '#2C053B',
};

const onInputBlur = async (e) => {
    const input = e.target;
    const isValid = await triggerValidation(input.name);
    if (!isValid) {
      input.classList.add('input-erro');
    } else {
      input.classList.remove('input-erro');
    }
  };

const createUserFormSchema = z.object({
   chavePix: z.string().nonempty('A chave do pix e obrigatoria!!!!'),

   valor: z.string().nonempty("Digite algum valor!!!").regex(/^\d+$/),

   senha: z.string().nonempty("Tem que digitar a senha")
   .regex(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+[\]{};':"\\|,.<>/?]).{8,}$/)
   .min(6,"A senha precisa no minimo 6 digitos"),

   agencia: z.string().nonempty("Tem que digitar o numero da agencia").regex(/(\d{4})(\d+)/).min(5)
   .max(5, "Só 5 numeros por favor corrija"),

   conta: z.string().nonempty("Digite o numero da conta").regex(/^\d+$/).min(8).max(8),

   valorEnviar: z.string().nonempty("Digite algum valor!!!").regex(/^\d+$/),

   senha2: z.string().nonempty("Tem que digitar a senha")
   .regex(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+[\]{};':"\\|,.<>/?]).{8,}$/)
   .min(6,"A senha precisa no minimo 6 digitos"),


})

type CreateUserFormData = z.infer<typeof createUserFormSchema>

export default function Modal({
  isOpen,
  setModalOpen,
  chavePix,
  valor,
  senha,
  agencia,
  conta,
  valorEnviar,
  senha2,
  title,
}: ModalProps) {
       
    const { register, 
        handleSubmit, 
        formState: {errors}
     }  = useForm<CreateUserFormData>({
        resolver: zodResolver(createUserFormSchema),
    })
  
   
    function createUser(data: any){
            console.log(data)
    }
    
    if (isOpen) {
    return (
      <div style={BACKGROUND_STYLE2}>
        <div style={MODAL_STYLE2}>
          <div>
            <h1>{title}</h1>
          {title === 'Pix' && (
            <form onSubmit={handleSubmit(createUser)}>
                <div>
                  <label>Chave Pix</label>
                  <input
                    type="text"
                    className="input-style"
                    placeholder="Digite a chave do recebedor"
                    {...register('chavePix')}
              
                  />
                  <br />
                  {errors.chavePix && <span>{errors.chavePix.message}</span>}
                </div>
                <div>
                  <label>Valor</label>
                  <input
                    type="text"
                    className="input-style"
                    placeholder="Digite o valor que deseja enviar"
                    {...register('valor')}
                    />
                    {errors.valor && <span>{errors.valor.message}</span>}
                </div>
                <div>
                  <label>Senha</label>
                  <input
                    type="password"
                    className="input-style"
                    placeholder="Digite sua senha"
                    {...register('senha')}
                  />
                  <br/>
                     {errors.senha && <span>{errors.senha.message}</span>}
                </div>
                <div>
              <button type="submit" >Efetuar Pagamento</button>
              <button onClick={setModalOpen}>Fechar</button>
              </div>
          </form>
        )}
            {title === 'TED' && (
            <form onSubmit={handleSubmit(createUser)}>
                <h2>Dados do Recebedor</h2>

               <div>
                  <label>Numero Da Agencia</label>
                   <input
                   type="text" 
                    className="input-style"
                    {...register('agencia')}
                    placeholder='Digite o numero da Agencia '
                    />
                          {errors.agencia && <span>{errors.agencia.message}</span>}
                </div>
                <div>
                  <label>Numero Da Conta</label>
                  <input 
                  type="text" 
                   className="input-style"
                   {...register('conta')}
                   />
                      {errors.conta && <span>{errors.conta.message}</span>}
                </div>

                <div>
                  <label>Valor A Enviar</label>
                  <input 
                  type="text"
                   className="input-style"
                   {...register('valorEnviar')}
                   />
                    {errors.valorEnviar && <span>{errors.valorEnviar.message}</span>}
                </div>

                <div>
                  <label>Digite Sua Senha</label>
                  <input 
                  type="password" 
                  className="input-style"
                  {...register('senha2')}
                  />
                   {errors.senha2 && <span>{errors.senha2.message}</span>}
                </div>
                 <div>
                  <button type="submit" >Efetuar Pagamento</button>
                  <button onClick={setModalOpen}>Fechar</button>
                </div>

            </form>
            )}
          </div>
          </div>
          </div>
      
    
    );
            }

  return null;
}
