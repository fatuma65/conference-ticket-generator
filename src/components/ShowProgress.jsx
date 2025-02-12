import ProgressBar from './ProgressBar'
import { useAuth } from '../context'

const ShowProgress = () => {
  const {totalSteps, currentPage} = useAuth()
 const progress = ((currentPage + 1) / totalSteps) * 100
  return (
    <>
    <ProgressBar progress={progress} color="#197686" height={'5px'}/>
    </>
  )
}

export default ShowProgress