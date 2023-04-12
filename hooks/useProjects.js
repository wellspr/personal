import useSWR from "swr";
import axios from "axios";

const useProjects = () => {
	const api = "https://projects-manager.paulowells.com/api/projects";
	
	const { data, error, isLoading } = useSWR(api, (url) => axios.get(url, {
	    headers: { "userID": "a3qrtkneaa48" }
	}).then(res => res.data));

	return { 
		projects: data,
		error,
		loading: isLoading
	};
};

export default useProjects;