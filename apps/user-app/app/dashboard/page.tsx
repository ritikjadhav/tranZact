import { PageHeading } from '@repo/ui/PageHeading'
import { TotalBalanceCard } from '../../components/TotalBalanceCard'

export default function Dashboard() {
    return (
        <div>
            <PageHeading title='Dashboard' />
            <TotalBalanceCard />
        </div>
    )
}
