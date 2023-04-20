import CardAmount from "./components/CardAmount"
import payedChargeIcon from './assets/payed-charge-icon.svg'
import overdueChargeIcon from './assets/overdue-charge-icon.svg'
import previewChargeIcon from './assets/preview-charge-icon.svg'
import CardBillingSummary from "./components/CardBillingSummary"

function App() {
  return (
    <div className="App">
      <div>
        <CardAmount 
        title={'Cobranças Pagas'} 
        value={'R$ 30.000'} 
        icon={payedChargeIcon} 
        bgcolor={'#EEF6F6'}/>
        <CardAmount 
        title={'Cobranças Vencidas'} 
        value={'R$ 7.000'} 
        icon={overdueChargeIcon} 
        bgcolor={'#FFEFEF'}/>
        <CardAmount 
        title={'Cobranças Previstas'} 
        value={'R$ 10.000'} 
        icon={previewChargeIcon} 
        bgcolor={'#FCF6DC'}/>
      </div>
      <div>
        <CardBillingSummary title={'Cobranças Vencidas'} count={'08'}/>
      </div>
    </div>
  )
}

export default App
