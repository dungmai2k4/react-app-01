import { useState } from 'react';
import PropTypes from 'prop-types';

// 1. Không import Slot2 từ chính nó nữa
export default function Slot21({ name }) { // 2. Thêm { } để lấy name từ props
  const [count, setCount] = useState(0);

  return (
    <>
      <h2>Slot2_1</h2>
      <p>Xin chào {name}</p> {/* 3. Sử dụng name từ props */}
      {/* Thêm ví dụ sử dụng count để bạn thấy nó hoạt động */}
      <p>Bạn đã click {count} lần</p>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <button
          style={{ width: '100px', textAlign: 'center' }}
          onClick={() => setCount(count + 1)}
        >
          Click vào tôi
        </button>
      </div>
    </>
  );
}