'use client';
import { FC, useEffect, useState } from 'react';
import { AppTextField } from '@benbeck764/react-components';
import SearchIcon from '@mui/icons-material/Search';
import { useRouter, useSearchParams } from 'next/navigation';
import { useDebounce } from '@/utilities/hooks/useDebounce';
import { getSearchUrl } from '@/routing/common/url';

type TypedPeopleSearchProps = {
  pageNumber?: number;
  pageSize?: number;
  filterText?: string;
};

const TypedPeopleSearch: FC<TypedPeopleSearchProps> = (props: TypedPeopleSearchProps) => {
  const { pageNumber, pageSize, filterText } = props;
  const router = useRouter();
  const params = useSearchParams();

  const [text, setText] = useState<string | undefined>(filterText);
  const debouncedFilterText = useDebounce(text, 300);

  useEffect(() => {
    if (debouncedFilterText) {
      const url = getSearchUrl({
        filter: debouncedFilterText,
        pageNumber: pageNumber ?? 0,
        pageSize: pageSize ?? 25,
      });
      router.push(url);
    } else {
      const url = getSearchUrl({});
      router.push(url);
    }
  }, [debouncedFilterText]);

  return (
    <AppTextField
      value={text}
      placeholder="Search..."
      onChange={(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | undefined) =>
        setText(e?.target?.value)
      }
      inputSize="medium"
      startIcon={<SearchIcon color="primary" sx={{ ml: 1 }} />}
      showClearButton
      onClear={() => setText('')}
      fullWidth
      autoFocus
    />
  );
};

export default TypedPeopleSearch;
