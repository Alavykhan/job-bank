const featureJobs =async()=>{
        const availableJobs = await fetch('featureJobs.json')
        const jobs = await availableJobs.json()
        // console.log(jobs);
        return jobs
}




export default featureJobs;