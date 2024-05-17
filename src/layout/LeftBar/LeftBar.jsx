import CardButton from '../../components/CardButton/CardButton';
import CreateButton from '../../components/CreateButton/CreateButton';
import style from './leftbar.module.css';


function LeftBar() {
  return (
    <div className={style.leftBar}>
      <CardButton>
        <CreateButton/>
      </CardButton>
    </div>
  )
}

export default LeftBar