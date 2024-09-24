import { PageHeading } from '@repo/ui/PageHeading'
import { TotalBalanceCard } from '../../components/TotalBalanceCard'
import { BarChartCard } from '@/components/BarChart'

export default function Dashboard() {
    return (
        <div>
            <PageHeading title='Dashboard' />
            <TotalBalanceCard />
            <div className='my-8'>
                <BarChartCard />
            </div>
        </div>
    )
}
