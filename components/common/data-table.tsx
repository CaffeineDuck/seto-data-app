'use client';

import React, { useMemo, type CSSProperties } from 'react';
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  useReactTable,
  type Column,
  type ColumnDef,
  type ColumnFiltersState,
  type SortingState,
} from '@tanstack/react-table';

import { cn } from '@/lib/utils';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  showBorder?: boolean;
  gap?: 'sm' | 'md' | 'lg';
  alignText?: 'left' | 'center' | 'right';

  className?: string;
  isLoading?: boolean;
}

function DataTable<TData, TValue>({
  columns,
  data,
  showBorder = false,
  gap = 'sm',
  alignText = 'left',
  className,
  isLoading,
}: DataTableProps<TData, TValue>) {
  const paddingX = gap === 'sm' ? 'px-4' : gap === 'md' ? 'px-6' : 'px-8';
  const alignTextClassName =
    alignText === 'left'
      ? '!text-left [&>*]:text-left'
      : alignText === 'center'
        ? '!text-center [&>*]:text-center'
        : '!text-right [&>*]:text-right';

  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    [],
  );

  const getCommonPinningStyles = (column: Column<TData>): CSSProperties => {
    const isPinned = column.getIsPinned();
    // const isLastLeftPinnedColumn =
    //   isPinned === 'left' && column.getIsLastColumn('left');
    // const isFirstRightPinnedColumn =
    //   isPinned === 'right' && column.getIsFirstColumn('right');

    return {
      // boxShadow: isLastLeftPinnedColumn
      //   ? '-4px 0 4px -4px gray inset'
      //   : isFirstRightPinnedColumn
      //     ? '4px 0 4px -4px gray inset'
      //     : undefined,
      left: isPinned === 'left' ? `${column.getStart('left')}px` : undefined,
      right: isPinned === 'right' ? `${column.getAfter('right')}px` : undefined,
      opacity: isPinned ? 0.95 : 1,
      position: isPinned ? 'sticky' : 'relative',
      width: column.getSize(),
      zIndex: isPinned ? 1 : 0,
      backgroundColor: '#ffffff',
    };
  };

  const memoizedData = useMemo(() => {
    return data;
  }, [data]);

  const table = useReactTable({
    data: memoizedData,
    columns,
    getCoreRowModel: getCoreRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      sorting,
      columnFilters,
    },
    initialState: {
      columnPinning: {
        left: ['symbol'],
        // right: ['actions-column'],
      },
    },
  });

  return (
    <div
      className={cn(
        'w-full',
        showBorder && 'rounded-md border-[1.5px] border-gray-200',
        className,
      )}
    >
      <Table className="relative">
        <TableHeader className="bg-background sticky top-0">
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header, index) => {
                return (
                  <TableHead
                    className={cn(
                      'font-semibold [&>*]:font-semibold ',
                      paddingX,
                      index > 1 &&
                        alignTextClassName.includes('text-right') &&
                        'text-right [&>button]:justify-end',
                    )}
                    key={header.id}
                    style={{ ...getCommonPinningStyles(header.column) }}
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext(),
                        )}
                  </TableHead>
                );
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && 'selected'}
              >
                {row.getVisibleCells().map((cell, index) => (
                  <TableCell
                    className={cn(
                      index > 1 && alignTextClassName,
                      paddingX,
                      'font-medium text-gray-600',
                    )}
                    key={cell.id}
                    style={{ ...getCommonPinningStyles(cell.column) }}
                  >
                    {flexRender(
                      cell?.column?.columnDef?.cell,
                      cell?.getContext(),
                    ) || '-'}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-start">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
        {isLoading && (
          <tbody
            aria-hidden="true"
            className="absolute inset-0 bottom-0 top-0 flex h-full w-full items-center gap-2.5 bg-white/90"
          />
        )}
      </Table>
    </div>
  );
}

export default DataTable;
