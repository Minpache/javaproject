import React, { useRef, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'api/axios';
import { displayDate } from "toolbox/DateDisplayer";

export default function PostListObserver () {
    const location = useLocation();
    let state = location.state;
    console.log("PostListObserver param", state);

    const [targetBoard, setTargetBoard] = useState(state.boardId);

    const [postList, setPostList] = useState([]);
    const [page, setPage] = useState(1);
  
    const [lastIntersectingImage, setLastIntersectingImage] = useState(null);
  
    const getPostListThenSet = async () => {
        console.log('fetching 함수 호출됨');
        try {
            const { data } = await axios.get(`http://localhost:8080/post/anonymous/listAll/${targetBoard}/${page}`);
            console.log("읽어온 게시글 목록", data.firstVal);
            setPostList(postList.concat(data.firstVal));
        } catch {
            console.error('fetching error');
        }
    };
  
    //observer 콜백함수
    const onIntersect = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          //뷰포트에 마지막 이미지가 들어오고, page값에 1을 더하여 새 fetch 요청을 보내게됨 (useEffect의 dependency배열에 page가 있음)
          setPage((prev) => prev + 1);
          // 현재 타겟을 unobserve한다.
          observer.unobserve(entry.target);
        }
      });
    };
  
    useEffect(() => {
      console.log('page ? ', page);
      getPostListThenSet();
    }, [page]);
  
    useEffect(() => {
      //observer 인스턴스를 생성한 후 구독
      let observer;
      if (lastIntersectingImage) {
        observer = new IntersectionObserver(onIntersect, { threshold: 0.5 });
         //observer 생성 시 observe할 target 요소는 불러온 이미지의 마지막아이템(randomImageList 배열의 마지막 아이템)으로 지정
        observer.observe(lastIntersectingImage);
      }
      return () => observer && observer.disconnect();
    }, [lastIntersectingImage]);
  
    return (
      <>
        {postList?.map((post, index) => {
          if (index === postList.length - 1) {
            return (
                <p key={post.id} ref={setLastIntersectingImage}>
                    <h2>{post.title}</h2>
                    <h4>{post.writer ? post.writer.name : ""}</h4>
                    <span>{post.readCnt}</span>
                    <span>{post.likeCnt}</span>
                    <h6>최종작성일 : <span>{displayDate(post.regDt, post.uptDt)} </span></h6>
                </p>
            );
          } else {
            return (
                <p key={post.id}>
                    <h2>{post.title}</h2>
                    <h4>{post.writer ? post.writer.name : ""}</h4>
                    <span>{post.readCnt}</span>
                    <span>{post.likeCnt}</span>
                    <h6>최종작성일 : <span>{displayDate(post.regDt, post.uptDt)} </span></h6>
                </p>
            );
          }
        })}
      </>
    );
  }