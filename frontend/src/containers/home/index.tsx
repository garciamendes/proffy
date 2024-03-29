import { withAuth } from "../../hooks/withAuth"
import ThumbHomeImg from '../../assets/thumb-home.svg'
import LogoImg from '../../assets/name-logo.svg'
import NoImageImg from '../../assets/no-image.svg'
import { BookOpen, Heart, Loader2, MonitorDot, Power } from "lucide-react"
import { useLogin } from "../../hooks/useLogin"
import { useCurrentUserQuery, useGetAllConnectionsQuery } from "../../store/modules/user/api"
import { useEffect } from "react"
import { toast } from "sonner"
import { useNavigate } from "react-router-dom"

const Home = () => {
  const navigate = useNavigate()
  const { logout } = useLogin()

  const { data: currentUser, isError: isErrorCurrentUser, isLoading: isLoadindCurrentUser } =
    useCurrentUserQuery()
  const { data: getAllConnections, isError: isErrorGetAllConnections, isLoading: isLoadingGetAllConnections } =
    useGetAllConnectionsQuery()

  useEffect(() => {
    if (isLoadindCurrentUser)
      return

    if (isErrorCurrentUser) {
      toast.error('Erro ao tentar buscar suas informações')
      return
    }
  }, [isErrorCurrentUser, isLoadindCurrentUser])

  useEffect(() => {
    if (isLoadingGetAllConnections)
      return

    if (isErrorGetAllConnections) {
      toast.error('Erro ao tentar buscar total de conexões')
      return
    }
  }, [isErrorGetAllConnections, isLoadingGetAllConnections])

  return (
    <div className="h-screen w-screen flex flex-col">
      <div className="flex justify-center h-[60%] bg-violet-600">
        <div className="flex flex-col justify-between w-[80%]">
          <header className="flex justify-between w-full mt-4">
            <div
              onClick={() => navigate('/profile')}
              className={`flex gap-4 items-center cursor-pointer ${isLoadindCurrentUser && 'pointer-events-none'}`}>
              {isLoadindCurrentUser ? (
                <Loader2 className="animate-spin text-white" />
              ) : (
                <>
                  <img className="inline-block size-10 rounded-full" src={NoImageImg} alt="" />
                  <span className="text-white text-base">{currentUser?.fullname || '---'}</span>
                </>
              )}
            </div>

            <div onClick={logout} className="flex items-center justify-center size-10 rounded-xl bg-violet-700 hover:bg-violet-800 cursor-pointer">
              <Power className="text-violet-300" />
            </div>
          </header>

          <div className="flex justify-between items-center mb-24 w-full">
            <div className='flex flex-col justify-start'>
              <img src={LogoImg} alt='Logo' />

              <h2 className='text-2xl w-52 text-violet-400'>Sua plataforma de estudos online.</h2>
            </div>

            <img src={ThumbHomeImg} alt="Thumb home" />
          </div>
        </div>
      </div>

      <div className="flex justify-center flex-1">
        <div className="flex justify-between items-center w-[80%]">
          <div className="w-1/2">
            <div className="flex justify-between items-center w-full">
              <div className="flex flex-col gap-0.5">
                <span className="text-[16px] text-gray-600">Seja bem-vindo</span>
                <strong className="text-[18px] text-gray-700">O que deseja fazer?</strong>
              </div>

              <div className="flex flex-col gap-0.5">
                {isLoadingGetAllConnections ? (
                  <Loader2 className="animate-spin text-white" />
                ) : (
                  <>
                    <span>{`Total de ${getAllConnections?.count ?? 0} conexões`}</span>
                    <span className="flex gap-3 items-center justify-end">já realizadas <Heart className='size-5 fill-violet-300 stroke-violet-300' /></span>
                  </>
                )}
              </div>
            </div>
          </div>

          <div className="w-1/2 px-12 flex items-center justify-around">
            <button
              onClick={() => navigate('/list-tearches')}
              className="py-5 rounded-xl border-none flex justify-center items-center gap-3 bg-violet-700 w-[30%] hover:opacity-90">
              <BookOpen className="size-9 text-white" />
              <strong className='text-white'>Estudar</strong>
            </button>

            <button
              onClick={() => navigate('/tearch')}
              className="py-5 rounded-xl border-none flex justify-center items-center gap-3 bg-green-500 w-[30%] hover:opacity-90">
              <MonitorDot className="size-9 text-white" />
              <strong className='text-white'>Dar aulas</strong>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default withAuth(Home)