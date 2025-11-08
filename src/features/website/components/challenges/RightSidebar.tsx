import { GetContributors, GetStats } from "./GetPostsTags"

const RightSidebar = () => {
    return (
        <aside className="hidden md:flex md:flex-col md:col-span-2">
            <div className="bg-white shadow p-6 mb-6 border flex flex-col justify-center items-center">
                <h3 className="font-semibold mb-2">Community Stats</h3>
                <GetStats />
            </div>
            <div className="bg-white shadow p-6 mb-6 border flex flex-col justify-center items-center">
                <h3 className="font-semibold mb-2">Top Contributors</h3>
                <GetContributors />
            </div>

        </aside>
    )
}

export default RightSidebar