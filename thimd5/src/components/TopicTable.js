import React, { useState, useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import SearchBar from './SearchBar';
import TopicList from './TopicList';
import Pagination from './Pagination';
import TopicService from './TopicService';

const TopicTable = () => {
    const [topics, setTopics] = useState([]);
    const [pageNumber, setPageNumber] = useState(0);
    const topicsPerPage = 4; // Số lượng topic mỗi trang
    const [targetPage, setTargetPage] = useState(0);
    const [searchKeyword, setSearchKeyword] = useState('');
    const [initialTopics, setInitialTopics] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await TopicService.getTopics(0, 1000, searchKeyword);
            setTopics(data);
            setInitialTopics(data);
        };
        fetchData();
    }, [searchKeyword]); // Thực hiện khi searchKeyword thay đổi

    useEffect(() => {
        setTargetPage(pageNumber);
    }, [pageNumber]);

    useEffect(() => {
        const sr = ScrollReveal({
            distance: '60px',
            duration: 2500,
            delay: 400,
            // reset: true
        });

        sr.reveal(`.custom-card`, {
            origin: 'left',
            interval: 100
        });
    }, [topics]); // Đảm bảo chạy lại khi topics thay đổi

    const handleSearchChange = (e) => {
        setSearchKeyword(e.target.value);
    };

    const handleReset = () => {
        setTopics(initialTopics);
        setSearchKeyword('');
        setPageNumber(0);
        setTargetPage(0);
    };

    const pageCount = Math.ceil(topics.length / topicsPerPage);

    const handlePageClick = ({ selected }) => {
        setPageNumber(selected);
    };

    return (
        <section className="container projects section" id="projects">
            <h2 className="section__title section__title-gradient projects__line">
                DANH SÁCH ĐỀ TÀI
            </h2>
            <SearchBar
                searchKeyword={searchKeyword}
                handleSearchChange={handleSearchChange}
                handleSearch={handleSearch}
                handleReset={handleReset}
            />
            <TopicList topics={topics} />
            <Pagination
                targetPage={targetPage}
                pageCount={pageCount}
                handlePageClick={handlePageClick}
            />
        </section>
    );
};

export default TopicTable;
