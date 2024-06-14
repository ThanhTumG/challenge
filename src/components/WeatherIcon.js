import React from "react";
import { useState } from "react";
export default function WeatherIcon(props) {
    // const [icon, setIcon] = useState(<></>)
    switch (props.name) {
        case "clear sky":
            return (<svg viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M111.955 66.5117C110.637 66.4438 109.63 65.3198 109.63 64C109.63 62.6802 110.637 61.5562 111.955 61.4883L117.005 61.2278C118.617 61.1446 120 62.3851 120 64C120 65.6149 118.617 66.8553 117.005 66.7722L111.955 66.5117ZM103.521 41.1787C104.182 42.3208 105.618 42.7936 106.793 42.1936L111.289 39.8982C112.732 39.1616 113.309 37.3865 112.497 35.9845C111.686 34.5825 109.864 34.2057 108.507 35.0892L104.276 37.8426C103.17 38.5623 102.861 40.0366 103.521 41.1787ZM86.8213 24.4786C87.9634 25.1395 89.4377 24.8305 90.1574 23.7245L92.9108 19.4933C93.7942 18.1356 93.4175 16.3141 92.0155 15.5028C90.6135 14.6915 88.8384 15.2684 88.1018 16.711L85.8064 21.2071C85.2064 22.3824 85.6792 23.8176 86.8213 24.4786ZM64 18.3704C65.3198 18.3704 66.4438 17.3633 66.5117 16.0453L66.7722 10.9954C66.8553 9.38262 65.6149 8 64 8C62.3851 8 61.1446 9.38262 61.2278 10.9954L61.4883 16.0453C61.5562 17.3633 62.6802 18.3704 64 18.3704ZM41.1787 24.4786C42.3208 23.8176 42.7936 22.3824 42.1936 21.2071L39.8982 16.711C39.1616 15.2684 37.3865 14.6915 35.9845 15.5028C34.5825 16.3141 34.2057 18.1356 35.0892 19.4933L37.8426 23.7245C38.5623 24.8305 40.0366 25.1395 41.1787 24.4786ZM24.4786 41.1787C25.1395 40.0366 24.8305 38.5623 23.7245 37.8426L19.4933 35.0892C18.1356 34.2058 16.3141 34.5825 15.5028 35.9845C14.6915 37.3865 15.2684 39.1616 16.711 39.8982L21.2071 42.1936C22.3824 42.7936 23.8176 42.3208 24.4786 41.1787ZM16.0453 61.4883C17.3633 61.5562 18.3704 62.6802 18.3704 64C18.3704 65.3198 17.3633 66.4438 16.0453 66.5117L10.9954 66.7722C9.38262 66.8554 8 65.6149 8 64C8 62.3851 9.38262 61.1446 10.9954 61.2278L16.0453 61.4883ZM24.4786 86.8213C23.8176 85.6792 22.3824 85.2064 21.2071 85.8064L16.711 88.1018C15.2684 88.8384 14.6915 90.6135 15.5028 92.0155C16.3141 93.4175 18.1356 93.7943 19.4933 92.9108L23.7245 90.1574C24.8305 89.4377 25.1395 87.9634 24.4786 86.8213ZM41.1787 103.521C40.0366 102.861 38.5623 103.17 37.8426 104.276L35.0892 108.507C34.2058 109.864 34.5825 111.686 35.9845 112.497C37.3865 113.309 39.1616 112.732 39.8982 111.289L42.1936 106.793C42.7936 105.618 42.3208 104.182 41.1787 103.521ZM64 109.63C62.6802 109.63 61.5562 110.637 61.4883 111.955L61.2278 117.005C61.1446 118.617 62.3851 120 64 120C65.6149 120 66.8554 118.617 66.7722 117.005L66.5117 111.955C66.4438 110.637 65.3198 109.63 64 109.63ZM86.8213 103.521C85.6792 104.182 85.2064 105.618 85.8064 106.793L88.1018 111.289C88.8384 112.732 90.6135 113.309 92.0155 112.497C93.4175 111.686 93.7943 109.864 92.9108 108.507L90.1574 104.276C89.4377 103.17 87.9634 102.861 86.8213 103.521ZM103.521 86.8213C102.861 87.9634 103.17 89.4377 104.276 90.1574L108.507 92.9108C109.864 93.7942 111.686 93.4175 112.497 92.0155C113.309 90.6135 112.732 88.8384 111.289 88.1018L106.793 85.8064C105.618 85.2064 104.182 85.6792 103.521 86.8213Z" fill="#FFD400" />
                <path d="M102.37 64C102.37 85.1914 85.1914 102.37 64 102.37C42.8086 102.37 25.6296 85.1914 25.6296 64C25.6296 42.8086 42.8086 25.6296 64 25.6296C85.1914 25.6296 102.37 42.8086 102.37 64Z" fill="#FFD400" />
            </svg>)

        case "broken clouds":
            return (<svg viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M27.1834 87.9112C13.275 87.9112 2 76.6362 2 62.7278C2 48.8194 13.275 37.5444 27.1834 37.5444C30.1992 37.5444 33.0912 38.0745 35.7712 39.0466C41.059 26.1128 53.767 17 68.6035 17C88.1851 17 104.059 32.874 104.059 52.4556C104.059 53.3182 104.028 54.1737 103.968 55.0208C109.889 57.7474 114 63.7339 114 70.6805C114 80.1968 106.286 87.9112 96.7692 87.9112H27.1834Z" fill="white" />
                <path opacity="0.54" d="M44.6095 72.4793C31.5703 72.4793 21 61.909 21 48.8698C21 35.8307 31.5703 25.2604 44.6095 25.2604C47.4368 25.2604 50.148 25.7573 52.6605 26.6687C57.6178 14.5433 69.5316 6 83.4408 6C101.799 6 116.68 20.8819 116.68 39.2396C116.68 40.0483 116.652 40.8503 116.595 41.6445C122.146 44.2007 126 49.813 126 56.3254C126 65.247 118.768 72.4793 109.846 72.4793H44.6095Z" fill="white" />
            </svg>

            )

        case "few clouds":
            return (<svg viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M63.2655 28.5539C64.0663 29.0173 65.1 28.8007 65.6046 28.0252L67.5351 25.0585C68.1546 24.1066 67.8904 22.8294 66.9074 22.2606C65.9244 21.6917 64.6798 22.0962 64.1634 23.1077L62.5539 26.2601C62.1332 27.0842 62.4647 28.0905 63.2655 28.5539Z" fill="#FFD400" />
                <path d="M47.2644 24.2712C48.1897 24.2712 48.9778 23.5651 49.0255 22.6409L49.2081 19.1002C49.2664 17.9694 48.3967 17 47.2644 17C46.1321 17 45.2623 17.9694 45.3207 19.1002L45.5033 22.6409C45.5509 23.5651 46.339 24.2712 47.2644 24.2712Z" fill="#FFD400" />
                <path d="M31.2632 28.5539C32.064 28.0905 32.3955 27.0842 31.9748 26.2602L30.3654 23.1077C29.8489 22.0962 28.6043 21.6917 27.6213 22.2606C26.6383 22.8294 26.3741 24.1066 26.9936 25.0585L28.9241 28.0252C29.4287 28.8007 30.4624 29.0173 31.2632 28.5539Z" fill="#FFD400" />
                <path d="M19.5539 40.2632C20.0173 39.4624 19.8007 38.4287 19.0252 37.9241L16.0585 35.9936C15.1066 35.3741 13.8294 35.6383 13.2606 36.6213C12.6917 37.6043 13.0962 38.8489 14.1077 39.3654L17.2601 40.9748C18.0842 41.3955 19.0905 41.064 19.5539 40.2632Z" fill="#FFD400" />
                <path d="M13.6409 54.5033C14.5651 54.5509 15.2712 55.339 15.2712 56.2644C15.2712 57.1897 14.5651 57.9778 13.6409 58.0255L10.1002 58.2081C8.96943 58.2664 8 57.3967 8 56.2644C8 55.1321 8.96942 54.2623 10.1002 54.3207L13.6409 54.5033Z" fill="#FFD400" />
                <path d="M65.4965 36.4809C60.7028 32.0609 54.2989 29.361 47.2644 29.361C32.4061 29.361 20.361 41.4061 20.361 56.2644C20.361 57.3502 20.4253 58.421 20.5504 59.4731C24.8985 56.6299 30.0953 54.977 35.6782 54.977C37.9422 54.977 40.146 55.2495 42.257 55.7644C46.9301 46.4848 55.3308 39.3996 65.4965 36.4809Z" fill="#FFD400" />
                <path d="M35.6782 107.115C22.1694 107.115 11.2184 96.1639 11.2184 82.6552C11.2184 69.1464 22.1694 58.1954 35.6782 58.1954C38.6073 58.1954 41.4161 58.7103 44.0192 59.6545C49.155 47.0924 61.4979 38.2414 75.908 38.2414C94.9269 38.2414 110.345 53.6593 110.345 72.6782C110.345 73.516 110.315 74.3468 110.256 75.1697C116.007 77.8179 120 83.6324 120 90.3793C120 99.6222 112.507 107.115 103.264 107.115H35.6782Z" fill="white" />
            </svg>)

        case "rain thunder":
            return (<svg viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M89.2914 58.3905H82.2733C80.9693 58.3905 79.8146 59.2329 79.4165 60.4747L72.8766 80.876C72.256 82.8121 73.7003 84.7918 75.7334 84.7918H79.3153C80.4603 84.7918 81.3715 85.7511 81.3127 86.8946L80.2038 108.431C80.1761 108.969 80.9006 109.165 81.1474 108.686L96.5343 78.8757C97.5649 76.879 96.1154 74.4997 93.8684 74.4997H90.8733C89.5094 74.4997 88.5455 73.1644 88.9751 71.8699L92.1388 62.3353C92.7831 60.3934 91.3374 58.3905 89.2914 58.3905Z" fill="#FFD400" />
                <path d="M98.1803 82.9112L100.241 78.9196C102.062 75.3909 99.5004 71.1862 95.5293 71.1862H92.6932L95.7252 62.0484C96.8639 58.6167 94.309 55.0769 90.6932 55.0769H81.5351C79.2305 55.0769 77.1899 56.5657 76.4864 58.7603L69.2978 81.1852C69.1122 81.7641 69.0311 82.3452 69.0418 82.9112L33.1834 82.9112C19.275 82.9112 8 71.6362 8 57.7278C8 43.8194 19.275 32.5444 33.1834 32.5444C36.1992 32.5444 39.0912 33.0745 41.7712 34.0466C47.059 21.1128 59.7671 12 74.6036 12C94.1852 12 110.059 27.874 110.059 47.4556C110.059 48.3182 110.028 49.1737 109.968 50.0208C115.889 52.7474 120 58.7339 120 65.6805C120 75.1967 112.285 82.9112 102.769 82.9112H98.1803Z" fill="white" />
                <path d="M68.4332 109.963L64.994 102.793L61.5544 109.964C61.2132 110.562 61.0178 111.256 61.0178 111.997C61.0178 114.234 62.798 116.047 64.9941 116.047C67.1902 116.047 68.9704 114.234 68.9704 111.997C68.9704 111.256 68.7748 110.561 68.4332 109.963Z" fill="#64D2FF" />
                <path d="M56.5048 96.7098L53.0651 89.5385L49.6259 96.7088C49.2843 97.3066 49.0887 98.0015 49.0887 98.7429C49.0887 100.98 50.869 102.793 53.065 102.793C55.2611 102.793 57.0414 100.98 57.0414 98.7429C57.0414 98.0019 56.846 97.3073 56.5048 96.7098Z" fill="#64D2FF" />
                <path d="M44.5756 109.964L41.1361 102.793L37.6968 109.963C37.3554 110.561 37.1598 111.256 37.1598 111.997C37.1598 114.234 38.9401 116.047 41.1361 116.047C43.3322 116.047 45.1124 114.234 45.1124 111.997C45.1124 111.256 44.917 110.561 44.5756 109.964Z" fill="#64D2FF" />
                <path d="M32.6464 96.7091L29.207 89.5385L25.7675 96.7095C25.4262 97.3071 25.2307 98.0017 25.2307 98.7429C25.2307 100.98 27.011 102.793 29.2071 102.793C31.4031 102.793 33.1834 100.98 33.1834 98.7429C33.1834 98.0016 32.9878 97.3068 32.6464 96.7091Z" fill="#64D2FF" />
            </svg>
            )

        case "rainy":
            return (<svg viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M33.1834 81.9112C19.275 81.9112 8 70.6362 8 56.7278C8 42.8194 19.275 31.5444 33.1834 31.5444C36.1992 31.5444 39.0912 32.0745 41.7712 33.0466C47.059 20.1128 59.767 11 74.6035 11C94.1851 11 110.059 26.874 110.059 46.4556C110.059 47.3182 110.028 48.1737 109.968 49.0208C115.889 51.7474 120 57.7339 120 64.6805C120 74.1968 112.286 81.9112 102.769 81.9112H33.1834Z" fill="white" />
                <path d="M92.9543 95.7094L89.5148 88.5385L86.0752 95.7096C85.7339 96.3071 85.5385 97.0018 85.5385 97.7429C85.5385 99.9797 87.3187 101.793 89.5148 101.793C91.7109 101.793 93.4911 99.9797 93.4911 97.7429C93.4911 97.0017 93.2956 96.307 92.9543 95.7094Z" fill="#64D2FF" />
                <path d="M81.0255 110.29L77.5858 103.118L74.1465 110.289C73.805 110.887 73.6095 111.581 73.6095 112.323C73.6095 114.56 75.3897 116.373 77.5858 116.373C79.7819 116.373 81.5621 114.56 81.5621 112.323C81.5621 111.582 81.3667 110.887 81.0255 110.29Z" fill="#64D2FF" />
                <path d="M69.0964 95.7095L65.6568 88.5385L62.2173 95.7094C61.876 96.307 61.6805 97.0017 61.6805 97.7429C61.6805 99.9797 63.4607 101.793 65.6568 101.793C67.8529 101.793 69.6331 99.9797 69.6331 97.7429C69.6331 97.0018 69.4377 96.3071 69.0964 95.7095Z" fill="#64D2FF" />
                <path d="M57.8299 110.289L54.3905 103.118L50.9509 110.289C50.6097 110.887 50.4142 111.582 50.4142 112.323C50.4142 114.56 52.1945 116.373 54.3905 116.373C56.5866 116.373 58.3669 114.56 58.3669 112.323C58.3669 111.582 58.1713 110.887 57.8299 110.289Z" fill="#64D2FF" />
                <path d="M45.9012 95.7097L42.4616 88.5385L39.0221 95.7092C38.6807 96.3069 38.4852 97.0016 38.4852 97.7429C38.4852 99.9797 40.2655 101.793 42.4615 101.793C44.6576 101.793 46.4379 99.9797 46.4379 97.7429C46.4379 97.0018 46.2424 96.3073 45.9012 95.7097Z" fill="#64D2FF" />
                <path d="M33.972 110.289L30.5325 103.118L27.093 110.289C26.7517 110.887 26.5562 111.582 26.5562 112.323C26.5562 114.56 28.3365 116.373 30.5325 116.373C32.7286 116.373 34.5089 114.56 34.5089 112.323C34.5089 111.582 34.3134 110.887 33.972 110.289Z" fill="#64D2FF" />
            </svg>
            )
        case "moderate rain": return (<svg viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M33.1834 81.9112C19.275 81.9112 8 70.6362 8 56.7278C8 42.8194 19.275 31.5444 33.1834 31.5444C36.1992 31.5444 39.0912 32.0745 41.7712 33.0466C47.059 20.1128 59.767 11 74.6035 11C94.1851 11 110.059 26.874 110.059 46.4556C110.059 47.3182 110.028 48.1737 109.968 49.0208C115.889 51.7474 120 57.7339 120 64.6805C120 74.1968 112.286 81.9112 102.769 81.9112H33.1834Z" fill="white" />
            <path d="M92.9543 95.7094L89.5148 88.5385L86.0752 95.7096C85.7339 96.3071 85.5385 97.0018 85.5385 97.7429C85.5385 99.9797 87.3187 101.793 89.5148 101.793C91.7109 101.793 93.4911 99.9797 93.4911 97.7429C93.4911 97.0017 93.2956 96.307 92.9543 95.7094Z" fill="#64D2FF" />
            <path d="M81.0255 110.29L77.5858 103.118L74.1465 110.289C73.805 110.887 73.6095 111.581 73.6095 112.323C73.6095 114.56 75.3897 116.373 77.5858 116.373C79.7819 116.373 81.5621 114.56 81.5621 112.323C81.5621 111.582 81.3667 110.887 81.0255 110.29Z" fill="#64D2FF" />
            <path d="M69.0964 95.7095L65.6568 88.5385L62.2173 95.7094C61.876 96.307 61.6805 97.0017 61.6805 97.7429C61.6805 99.9797 63.4607 101.793 65.6568 101.793C67.8529 101.793 69.6331 99.9797 69.6331 97.7429C69.6331 97.0018 69.4377 96.3071 69.0964 95.7095Z" fill="#64D2FF" />
            <path d="M57.8299 110.289L54.3905 103.118L50.9509 110.289C50.6097 110.887 50.4142 111.582 50.4142 112.323C50.4142 114.56 52.1945 116.373 54.3905 116.373C56.5866 116.373 58.3669 114.56 58.3669 112.323C58.3669 111.582 58.1713 110.887 57.8299 110.289Z" fill="#64D2FF" />
            <path d="M45.9012 95.7097L42.4616 88.5385L39.0221 95.7092C38.6807 96.3069 38.4852 97.0016 38.4852 97.7429C38.4852 99.9797 40.2655 101.793 42.4615 101.793C44.6576 101.793 46.4379 99.9797 46.4379 97.7429C46.4379 97.0018 46.2424 96.3073 45.9012 95.7097Z" fill="#64D2FF" />
            <path d="M33.972 110.289L30.5325 103.118L27.093 110.289C26.7517 110.887 26.5562 111.582 26.5562 112.323C26.5562 114.56 28.3365 116.373 30.5325 116.373C32.7286 116.373 34.5089 114.56 34.5089 112.323C34.5089 111.582 34.3134 110.887 33.972 110.289Z" fill="#64D2FF" />
        </svg>
        )
        case "scattered clouds":
            return (<svg viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M33.1834 81.9112C19.275 81.9112 8 70.6362 8 56.7278C8 42.8194 19.275 31.5444 33.1834 31.5444C36.1992 31.5444 39.0912 32.0745 41.7712 33.0466C47.059 20.1128 59.767 11 74.6035 11C94.1851 11 110.059 26.874 110.059 46.4556C110.059 47.3182 110.028 48.1737 109.968 49.0208C115.889 51.7474 120 57.7339 120 64.6805C120 74.1968 112.286 81.9112 102.769 81.9112H33.1834Z" fill="white" />
            </svg>
            )

        case "shower rain":
            return (<svg viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M27.1834 87.9112C13.275 87.9112 2 76.6362 2 62.7278C2 48.8194 13.275 37.5444 27.1834 37.5444C30.1992 37.5444 33.0912 38.0745 35.7712 39.0466C41.059 26.1128 53.767 17 68.6035 17C88.1851 17 104.059 32.874 104.059 52.4556C104.059 53.3182 104.028 54.1737 103.968 55.0208C109.889 57.7474 114 63.7339 114 70.6805C114 80.1968 106.286 87.9112 96.7692 87.9112H27.1834Z" fill="white" />
                <path opacity="0.54" d="M44.6095 72.4793C31.5703 72.4793 21 61.909 21 48.8698C21 35.8307 31.5703 25.2604 44.6095 25.2604C47.4368 25.2604 50.148 25.7573 52.6605 26.6687C57.6178 14.5433 69.5316 6 83.4408 6C101.799 6 116.68 20.8819 116.68 39.2396C116.68 40.0483 116.652 40.8503 116.595 41.6445C122.146 44.2007 126 49.813 126 56.3254C126 65.247 118.768 72.4793 109.846 72.4793H44.6095Z" fill="white" />
                <path d="M94.3981 99.1709L90.9586 92L87.519 99.1711C87.1777 99.7687 86.9822 100.463 86.9822 101.204C86.9822 103.441 88.7625 105.254 90.9586 105.254C93.1546 105.254 94.9349 103.441 94.9349 101.204C94.9349 100.463 94.7394 99.7685 94.3981 99.1709Z" fill="#64D2FF" />
                <path d="M82.4693 113.751L79.0296 106.58L75.5903 113.75C75.2488 114.348 75.0533 115.043 75.0533 115.784C75.0533 118.021 76.8335 119.834 79.0296 119.834C81.2257 119.834 83.0059 118.021 83.0059 115.784C83.0059 115.043 82.8105 114.349 82.4693 113.751Z" fill="#64D2FF" />
                <path d="M70.5402 99.1711L67.1006 92L63.6611 99.1709C63.3198 99.7686 63.1243 100.463 63.1243 101.204C63.1243 103.441 64.9045 105.254 67.1006 105.254C69.2967 105.254 71.0769 103.441 71.0769 101.204C71.0769 100.463 70.8815 99.7687 70.5402 99.1711Z" fill="#64D2FF" />
                <path d="M59.2737 113.751L55.8343 106.58L52.3947 113.751C52.0534 114.349 51.858 115.043 51.858 115.784C51.858 118.021 53.6383 119.834 55.8343 119.834C58.0304 119.834 59.8107 118.021 59.8107 115.784C59.8107 115.043 59.6151 114.348 59.2737 113.751Z" fill="#64D2FF" />
                <path d="M47.345 99.1713L43.9053 92L40.4659 99.1708C40.1245 99.7684 39.929 100.463 39.929 101.204C39.929 103.441 41.7093 105.254 43.9053 105.254C46.1014 105.254 47.8817 103.441 47.8817 101.204C47.8817 100.463 47.6862 99.7688 47.345 99.1713Z" fill="#64D2FF" />
                <path d="M35.4158 113.751L31.9763 106.58L28.5368 113.751C28.1955 114.348 28 115.043 28 115.784C28 118.021 29.7803 119.834 31.9763 119.834C34.1724 119.834 35.9527 118.021 35.9527 115.784C35.9527 115.043 35.7572 114.348 35.4158 113.751Z" fill="#64D2FF" />
            </svg>)
        case "heavy intensity rain":
            return (<svg viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M27.1834 87.9112C13.275 87.9112 2 76.6362 2 62.7278C2 48.8194 13.275 37.5444 27.1834 37.5444C30.1992 37.5444 33.0912 38.0745 35.7712 39.0466C41.059 26.1128 53.767 17 68.6035 17C88.1851 17 104.059 32.874 104.059 52.4556C104.059 53.3182 104.028 54.1737 103.968 55.0208C109.889 57.7474 114 63.7339 114 70.6805C114 80.1968 106.286 87.9112 96.7692 87.9112H27.1834Z" fill="white" />
                <path opacity="0.54" d="M44.6095 72.4793C31.5703 72.4793 21 61.909 21 48.8698C21 35.8307 31.5703 25.2604 44.6095 25.2604C47.4368 25.2604 50.148 25.7573 52.6605 26.6687C57.6178 14.5433 69.5316 6 83.4408 6C101.799 6 116.68 20.8819 116.68 39.2396C116.68 40.0483 116.652 40.8503 116.595 41.6445C122.146 44.2007 126 49.813 126 56.3254C126 65.247 118.768 72.4793 109.846 72.4793H44.6095Z" fill="white" />
                <path d="M94.3981 99.1709L90.9586 92L87.519 99.1711C87.1777 99.7687 86.9822 100.463 86.9822 101.204C86.9822 103.441 88.7625 105.254 90.9586 105.254C93.1546 105.254 94.9349 103.441 94.9349 101.204C94.9349 100.463 94.7394 99.7685 94.3981 99.1709Z" fill="#64D2FF" />
                <path d="M82.4693 113.751L79.0296 106.58L75.5903 113.75C75.2488 114.348 75.0533 115.043 75.0533 115.784C75.0533 118.021 76.8335 119.834 79.0296 119.834C81.2257 119.834 83.0059 118.021 83.0059 115.784C83.0059 115.043 82.8105 114.349 82.4693 113.751Z" fill="#64D2FF" />
                <path d="M70.5402 99.1711L67.1006 92L63.6611 99.1709C63.3198 99.7686 63.1243 100.463 63.1243 101.204C63.1243 103.441 64.9045 105.254 67.1006 105.254C69.2967 105.254 71.0769 103.441 71.0769 101.204C71.0769 100.463 70.8815 99.7687 70.5402 99.1711Z" fill="#64D2FF" />
                <path d="M59.2737 113.751L55.8343 106.58L52.3947 113.751C52.0534 114.349 51.858 115.043 51.858 115.784C51.858 118.021 53.6383 119.834 55.8343 119.834C58.0304 119.834 59.8107 118.021 59.8107 115.784C59.8107 115.043 59.6151 114.348 59.2737 113.751Z" fill="#64D2FF" />
                <path d="M47.345 99.1713L43.9053 92L40.4659 99.1708C40.1245 99.7684 39.929 100.463 39.929 101.204C39.929 103.441 41.7093 105.254 43.9053 105.254C46.1014 105.254 47.8817 103.441 47.8817 101.204C47.8817 100.463 47.6862 99.7688 47.345 99.1713Z" fill="#64D2FF" />
                <path d="M35.4158 113.751L31.9763 106.58L28.5368 113.751C28.1955 114.348 28 115.043 28 115.784C28 118.021 29.7803 119.834 31.9763 119.834C34.1724 119.834 35.9527 118.021 35.9527 115.784C35.9527 115.043 35.7572 114.348 35.4158 113.751Z" fill="#64D2FF" />
            </svg>)

        case "snowy":
            return (<svg viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M46.8717 66.6318C46.8717 65.7731 47.5678 65.0769 48.4265 65.0769C49.2852 65.0769 49.9814 65.7731 49.9814 66.6318V72.2469L52.6952 69.8346C53.3324 69.2681 54.3149 69.3195 54.8895 69.9495C55.464 70.5795 55.4132 71.5495 54.7759 72.116L49.9814 76.3779V83.3408L56.4147 79.6739L57.6685 73.8506C57.8472 73.0208 58.6729 72.491 59.5128 72.6672C60.3528 72.8435 60.8889 73.6591 60.7102 74.4888L60.0386 77.6084L64.5897 75.0143C65.3286 74.5931 66.2757 74.8469 66.705 75.5811C67.1344 76.3152 66.8835 77.2518 66.1446 77.673L61.224 80.4776L64.6427 81.5742C65.4599 81.8363 65.9073 82.7025 65.6419 83.5087C65.3766 84.315 64.499 84.7561 63.6817 84.4939L57.6001 82.5431L51.6523 85.9332L58.0694 89.5908L63.7531 87.7677C64.5703 87.5055 65.4479 87.9466 65.7133 88.7529C65.9787 89.5591 65.5313 90.4252 64.714 90.6874L61.6932 91.6564L66.213 94.2325C66.9519 94.6537 67.2029 95.5903 66.7735 96.3245C66.3442 97.0586 65.3971 97.3124 64.6582 96.8912L59.7065 94.0688L60.465 97.592C60.6437 98.4218 60.1076 99.2374 59.2677 99.4136C58.4277 99.5899 57.602 99.0601 57.4233 98.2303L56.0826 92.0033L49.9814 88.5257V95.9842L54.4649 99.9697C55.1022 100.536 55.1531 101.506 54.5785 102.136C54.0039 102.766 53.0215 102.818 52.3842 102.251L49.9814 100.115V105.274C49.9814 106.132 49.2852 106.828 48.4265 106.828C47.5678 106.828 46.8717 106.132 46.8717 105.274V99.6943L44.1981 102.071C43.5608 102.637 42.5783 102.586 42.0038 101.956C41.4292 101.326 41.48 100.356 42.1173 99.7894L46.8717 95.5632V88.6581L40.3383 92.382L39.0959 98.1527C38.9172 98.9825 38.0915 99.5122 37.2515 99.336C36.4116 99.1597 35.8755 98.3442 36.0541 97.5144L36.7145 94.4475L32.1949 97.0236C31.456 97.4447 30.5089 97.191 30.0795 96.4568C29.6502 95.7226 29.9011 94.786 30.64 94.3649L35.5919 91.5424L32.1217 90.4293C31.3045 90.1671 30.8571 89.301 31.1224 88.4948C31.3878 87.6885 32.2654 87.2474 33.0826 87.5096L39.2158 89.4769L45.433 85.9332L38.8833 82.2001L33.1484 84.0397C32.3311 84.3019 31.4535 83.8608 31.1882 83.0545C30.9228 82.2483 31.3702 81.3822 32.1874 81.12L35.2595 80.1346L30.7085 77.5406C29.9696 77.1195 29.7187 76.1829 30.148 75.4487C30.5774 74.7145 31.5244 74.4608 32.2633 74.882L37.1838 77.6865L36.4364 74.2154C36.2578 73.3856 36.7939 72.5701 37.6338 72.3938C38.4737 72.2176 39.2995 72.7474 39.4781 73.5771L40.8076 79.752L46.8717 83.2084V75.8853L42.4283 71.9355C41.791 71.369 41.7402 70.3991 42.3148 69.7691C42.8893 69.1391 43.8718 69.0876 44.5091 69.6541L46.8717 71.7543V66.6318Z" fill="#64D2FF" />
                <path d="M69.0954 92.9112C68.8252 92.6355 68.5123 92.3922 68.1592 92.1917L68.0136 92.109C68.9578 91.0292 69.3378 89.4955 68.8471 88.0102C68.5913 87.2359 68.1366 86.5899 67.5606 86.1046C68.1016 85.627 68.5284 85.0036 68.7732 84.2627C69.3012 82.6645 68.8211 81.0104 67.7149 79.9258L68.0882 79.7138C70.1381 78.5498 70.8366 75.9427 69.6432 73.9098C68.4649 71.9026 65.884 71.2111 63.8601 72.3604L63.6296 72.4912C63.1701 71.0858 61.9819 69.9707 60.4508 69.6506C59.6529 69.4838 58.8523 69.5519 58.1284 69.8116C57.9996 69.0324 57.6502 68.2796 57.0751 67.6514C55.9331 66.404 54.212 65.9889 52.6876 66.4468V66.0245C52.6876 63.6711 50.7798 61.7633 48.4264 61.7633C46.073 61.7633 44.1652 63.6711 44.1652 66.0245V66.1687C42.7368 65.8734 41.1933 66.3162 40.1412 67.4653C39.5832 68.0748 39.2377 68.8015 39.1 69.556C38.3575 69.2747 37.5304 69.1963 36.7062 69.3687C35.0771 69.7092 33.8362 70.9498 33.4482 72.4824L32.9927 72.2238C30.9687 71.0746 28.3879 71.766 27.2096 73.7732C26.0161 75.8062 26.7146 78.4133 28.7646 79.5773L28.917 79.6638C27.9526 80.7453 27.5603 82.2943 28.0558 83.7941C28.3191 84.591 28.793 85.252 29.3931 85.7418C28.7608 86.2366 28.2609 86.9171 27.9877 87.7439C27.4549 89.3568 27.9488 91.0267 29.0768 92.1106L28.6936 92.3282C28.6144 92.3732 28.5373 92.4203 28.4622 92.4694C16.8105 90.2595 8 80.0225 8 67.7278C8 53.8194 19.275 42.5444 33.1834 42.5444C36.1992 42.5444 39.0912 43.0745 41.7712 44.0466C47.059 31.1128 59.767 22 74.6035 22C94.1851 22 110.059 37.874 110.059 57.4556C110.059 58.3182 110.028 59.1737 109.968 60.0208C115.889 62.7474 120 68.7339 120 75.6805C120 85.1968 112.286 92.9112 102.769 92.9112H69.0954Z" fill="white" />
            </svg>
            )
        case "light rain":
            return (<svg viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M88.3981 104.171L84.9586 97L81.519 104.171C81.1777 104.769 80.9822 105.463 80.9822 106.204C80.9822 108.441 82.7625 110.254 84.9586 110.254C87.1546 110.254 88.9349 108.441 88.9349 106.204C88.9349 105.463 88.7394 104.769 88.3981 104.171Z" fill="#64D2FF" />
                <path d="M76.4693 118.751L73.0296 111.58L69.5903 118.75C69.2488 119.348 69.0533 120.043 69.0533 120.784C69.0533 123.021 70.8335 124.834 73.0296 124.834C75.2257 124.834 77.0059 123.021 77.0059 120.784C77.0059 120.043 76.8105 119.349 76.4693 118.751Z" fill="#64D2FF" />
                <path d="M64.5402 104.171L61.1006 97L57.6611 104.171C57.3198 104.769 57.1243 105.463 57.1243 106.204C57.1243 108.441 58.9045 110.254 61.1006 110.254C63.2967 110.254 65.0769 108.441 65.0769 106.204C65.0769 105.463 64.8815 104.769 64.5402 104.171Z" fill="#64D2FF" />
                <path d="M53.2737 118.751L49.8343 111.58L46.3947 118.751C46.0534 119.349 45.858 120.043 45.858 120.784C45.858 123.021 47.6383 124.834 49.8343 124.834C52.0304 124.834 53.8107 123.021 53.8107 120.784C53.8107 120.043 53.6151 119.348 53.2737 118.751Z" fill="#64D2FF" />
                <path d="M41.345 104.171L37.9053 97L34.4659 104.171C34.1245 104.768 33.929 105.463 33.929 106.204C33.929 108.441 35.7093 110.254 37.9053 110.254C40.1014 110.254 41.8817 108.441 41.8817 106.204C41.8817 105.463 41.6862 104.769 41.345 104.171Z" fill="#64D2FF" />
                <path d="M29.4158 118.751L25.9763 111.58L22.5368 118.751C22.1955 119.348 22 120.043 22 120.784C22 123.021 23.7803 124.834 25.9763 124.834C28.1724 124.834 29.9527 123.021 29.9527 120.784C29.9527 120.043 29.7572 119.348 29.4158 118.751Z" fill="#64D2FF" />
                <path d="M55.2655 11.5539C56.0663 12.0173 57.1 11.8007 57.6046 11.0252L59.5351 8.05849C60.1546 7.10657 59.8904 5.8294 58.9074 5.26055C57.9244 4.69171 56.6798 5.09621 56.1634 6.10772L54.5539 9.26015C54.1332 10.0842 54.4647 11.0905 55.2655 11.5539Z" fill="#FFD400" />
                <path d="M39.2644 7.27118C40.1897 7.27118 40.9778 6.56509 41.0255 5.64094L41.2081 2.10022C41.2664 0.969424 40.3967 0 39.2644 0C38.1321 0 37.2623 0.969426 37.3207 2.10022L37.5033 5.64094C37.5509 6.56509 38.339 7.27118 39.2644 7.27118Z" fill="#FFD400" />
                <path d="M23.2632 11.5539C24.064 11.0905 24.3955 10.0842 23.9748 9.26015L22.3654 6.10772C21.8489 5.09621 20.6043 4.69171 19.6213 5.26056C18.6383 5.8294 18.3741 7.10657 18.9936 8.05849L20.9241 11.0252C21.4287 11.8007 22.4624 12.0173 23.2632 11.5539Z" fill="#FFD400" />
                <path d="M11.5539 23.2632C12.0173 22.4624 11.8007 21.4287 11.0252 20.9241L8.05849 18.9936C7.10657 18.3741 5.8294 18.6383 5.26055 19.6213C4.69171 20.6043 5.09621 21.8489 6.10772 22.3654L9.26015 23.9748C10.0842 24.3955 11.0905 24.064 11.5539 23.2632Z" fill="#FFD400" />
                <path d="M5.64094 37.5033C6.56509 37.5509 7.27118 38.339 7.27118 39.2644C7.27118 40.1897 6.56509 40.9778 5.64094 41.0255L2.10022 41.2081C0.969426 41.2664 0 40.3967 0 39.2644C0 38.1321 0.969424 37.2623 2.10022 37.3207L5.64094 37.5033Z" fill="#FFD400" />
                <path d="M57.4965 19.4809C52.7028 15.0609 46.2989 12.361 39.2644 12.361C24.4061 12.361 12.361 24.4061 12.361 39.2644C12.361 40.3502 12.4253 41.421 12.5504 42.4731C16.8985 39.6299 22.0953 37.977 27.6782 37.977C29.9422 37.977 32.146 38.2495 34.257 38.7644C38.9301 29.4848 47.3308 22.3996 57.4965 19.4809Z" fill="#FFD400" />
                <path d="M27.6782 90.1149C14.1694 90.1149 3.21838 79.1639 3.21838 65.6552C3.21838 52.1464 14.1694 41.1954 27.6782 41.1954C30.6073 41.1954 33.4161 41.7103 36.0192 42.6544C41.155 30.0924 53.4979 21.2414 67.908 21.2414C86.9269 21.2414 102.345 36.6593 102.345 55.6782C102.345 56.516 102.315 57.3468 102.256 58.1697C108.007 60.8179 112 66.6323 112 73.3793C112 82.6221 104.507 90.1149 95.2644 90.1149H27.6782Z" fill="white" />
            </svg>)
        case "overcast clouds":
            return (<svg viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path opacity="0.45" d="M47.4852 95.3258C35.067 95.3258 25 85.2589 25 72.8406C25 60.4224 35.067 50.3554 47.4852 50.3554C50.1779 50.3554 52.76 50.8287 55.1529 51.6967C59.8741 40.1487 71.2206 32.0122 84.4675 32.0122C101.951 32.0122 116.124 46.1855 116.124 63.669C116.124 64.4392 116.097 65.203 116.043 65.9594C121.33 68.3939 125 73.7389 125 79.9412C125 88.4379 118.112 95.3258 109.615 95.3258H47.4852Z" fill="white" />
                <path opacity="0.2" d="M63.3215 72.6129C53.4403 72.6129 45.4301 64.4064 45.4301 54.2831C45.4301 44.1598 53.4403 35.9533 63.3215 35.9533C65.4641 35.9533 67.5186 36.3391 69.4227 37.0467C73.1793 27.6328 82.2077 21 92.7482 21C106.66 21 117.938 32.5539 117.938 46.8065C117.938 47.4343 117.916 48.0569 117.873 48.6736C122.08 50.6581 125 55.0154 125 60.0715C125 66.9979 119.519 72.6129 112.758 72.6129H63.3215Z" fill="white" />
                <path opacity="0.6" d="M38.7574 80C44.9665 80 50 74.9119 50 68.6355C50 62.3591 44.9665 57.271 38.7574 57.271C37.4111 57.271 36.12 57.5102 34.9236 57.9489C32.563 52.1123 26.8897 48 20.2663 48C11.5245 48 4.43787 55.1634 4.43787 64C4.43787 64.3893 4.45162 64.7753 4.47866 65.1576C1.83512 66.388 1.14265e-06 69.0895 1.14265e-06 72.2243C1.14265e-06 76.5187 3.44396 80 7.69231 80H38.7574Z" fill="white" />
            </svg>
            )

        default:
            return (<></>)

    }
    // return icon
}
