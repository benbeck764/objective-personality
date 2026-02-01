'use client';
import { FC, useEffect, useRef, useState } from 'react';
import { AppTextField } from '@benbeck764/react-components';
import SearchIcon from '@mui/icons-material/Search';
import { useDebounce } from '@/utilities/hooks/useDebounce';
import { useSearchFilter, useSearchPage } from '../hooks/useSearchParams';

const TypedPeopleSearch: FC = () => {
  const [filter, setFilter] = useSearchFilter();
  const [, setPage] = useSearchPage();
  const inputRef = useRef<HTMLInputElement>(null);

  const [text, setText] = useState<string>(filter ?? '');
  const debouncedFilterText = useDebounce(text, 300);

  useEffect(() => {
    if (debouncedFilterText !== filter) {
      setFilter(debouncedFilterText ?? '');
      setPage(0);
    }
  }, [debouncedFilterText, filter, setFilter, setPage]);

  useEffect(() => {
    // Focus input and move cursor to end of text on mount
    if (inputRef.current) {
      inputRef.current.focus();
      if (text) {
        const length = text.length;
        inputRef.current.setSelectionRange(length, length);
      }
    }
  }, []);

  return (
    <AppTextField
      inputRef={inputRef}
      value={text}
      placeholder="Search..."
      onChange={(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | undefined) =>
        setText(e?.target?.value ?? '')
      }
      inputSize="medium"
      startIcon={<SearchIcon color="primary" sx={{ ml: 1 }} />}
      showClearButton
      onClear={() => setText('')}
      fullWidth
    />
  );
};

export default TypedPeopleSearch;
