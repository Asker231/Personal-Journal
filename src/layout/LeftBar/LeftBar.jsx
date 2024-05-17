import CardButton from '../../components/CardButton/CardButton';
import CreateButton from '../../components/CreateButton/CreateButton';
import JournalList from '../../components/JournalList/JournalList.jsx';
import LogoType from '../../components/LogoType/LogoType.jsx'
import style from './leftbar.module.css';


function LeftBar() {

  return (
    <div className={style.leftBar}>
      <LogoType/>
       <CardButton>
         <CreateButton/>
        </CardButton>
      <JournalList/>
    </div>
  )
}

export default LeftBar