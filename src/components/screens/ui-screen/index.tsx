import UiScreenFirst from '@/components/screens/ui-screen/ui-screen-first'
import UiScreenSecond from '@/components/screens/ui-screen/ui-screen-second'
import SelectTurret from '@/components/select-turret'

const UiScreen = () => {
  return (
    <>
      <div className='ui-wrap'>
        <div className='wrap'>
          <UiScreenFirst />
        </div>

        <div className='wrap'>
          <UiScreenSecond />
        </div>
      </div>

      <SelectTurret />
    </>
  )
}

export default UiScreen
