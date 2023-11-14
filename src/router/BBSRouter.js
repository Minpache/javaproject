import React from 'react';
import { Route, Routes } from "react-router-dom";

import Home from 'components/Home';
import PostListWithPaging from 'components/post/PostListWithPaging';
import PostListObserver from 'components/post/PostListObserver';
import PostDetail from 'components/post/PostDetail';
import Register from 'components/Register';
import MemberList from 'components/MemberList';
import PostMng from 'components/post/PostMng';

function BBSRouter() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/board" element={<PostListWithPaging />} />
            <Route path="/post-list" element={<PostListObserver />} />
            <Route path="/post" element={<PostDetail />} />
            <Route path="/post/managePost" element={<PostMng />} />
            <Route path="/sign-up" element={<Register />} />
            <Route path="/member-list/:ownerId" element={<MemberList />} />
        </Routes>
    );
}

export default BBSRouter;