import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';


export default function TodolistLoadingSkeleton() {
    return (

        <SkeletonTheme baseColor="#2B2B32" highlightColor="#444444">
            <Skeleton height={60} />
        </SkeletonTheme>



    )
}
