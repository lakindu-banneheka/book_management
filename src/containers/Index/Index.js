import React from 'react';
import BookCardLayout from '../../components/Layout/BookCardLayout';
import Layout from '../../components/Layout/Layout';


const Index = () => {
    return (
        <div>
            <Layout searchBar >
                <BookCardLayout />
            </Layout>
        </div>
    );
};

export default Index;