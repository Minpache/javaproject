import { useEffect } from "react";
import {useIterator} from "hooks/useIterator";
import GitRepositoryReadme from "./GitRepositoryReadme";

export default function RepoItem({repositories, onSelect = f=>f}) {
    const {item, prev, next} = useIterator(repositories);

    useEffect(()=>{
        if (!item) return;
        onSelect(item);
    }, [item]);
    
    if (!repositories || repositories.length === 0)
        return <>repository is Empty....</>;

    //<GitRepositoryReadme loginId={loginId} repo={item.name}/>
    return <>
        <div style={{display:"flex"}}>
            <button onClick={prev}>&lt;</button>
            <p>{item.name}</p>
            <button onClick={next}>&gt;</button>
        </div>
    </> ; 
}