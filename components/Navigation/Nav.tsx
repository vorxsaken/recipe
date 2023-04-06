import { AiOutlineSearch } from 'react-icons/ai'
import { BiSearchAlt } from 'react-icons/bi'
import TextField from "../TextField"
import SelectField from "../SelectField"
import Button from "../Button"
import FullScreenContent from "../FullScreenContent"
import { useFullscreenContentContext } from "@/Reducer/FullScreenContentReducer"
import BottomMenu from './BottomMenu'
import TopMenu from './TopMenu'

export default function Nav() {
  const [state, dispatch] = useFullscreenContentContext();
  const nutritions = [
    'Carbs',
    'Protein',
    'Calories',
    'Fat',
    'Caffeine',
    'Calcium',
    'Cholestrol',
    'VitaminA',
    'VitaminC',
    'VitaminD',
    'VitaminE',
    'VitaminK',
    'VitaminB1',
    'VitaminB2',
    'VitaminB5',
    'VitaminB3',
    'VitaminB6',
    'VitaminB12',
  ]

  return (
    <div className='w-full h-16 border-b-2 border-slate-100 flex justify-between items-center fixed md:top-0 
    bottom-0 bg-white z-10 md:px-10'>
      <TopMenu />
      {/* search dialog on small screen */}
      <FullScreenContent show={state.show}>
        <div className="flex flex-col gap-4 justify-center items-center">
          <TextField icon={<AiOutlineSearch />} placeholder={'Search'} />
          <div className="flex flex-row justify-center items-center gap-2">
            <SelectField options={nutritions} placeholder='Filter' />
            <TextField small={true} placeholder='Min' />
            <TextField small={true} placeholder='Max' />
          </div>
        </div>
        <div className="w-full flex flex-col gap-4 justify-center items-center py-8">
          <BiSearchAlt className="text-8xl text-slate-300" />
          <p className="text-center text-md text-slate-300">search result in here</p>
        </div>
        <Button>Terapkan</Button>
      </FullScreenContent>
      {/* bottom navigation on small screen */}
      <BottomMenu />
    </div>
  )
}
