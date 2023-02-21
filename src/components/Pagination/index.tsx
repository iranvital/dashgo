import { Box, Stack, Text } from "@chakra-ui/react";
import { PaginationItem } from "./PaginationItem";

interface PaginationProps {
  totalCountOfRegisters: number
  registersPerPage?: number
  currentePage?: number
  onPageChange: (page: number) => void
}

const siblingsCount = 1

function generatePagesArray(from: number, to: number) {
  return [...new Array(to - from)].map((_, index) => {
    return from + index + 1
  }).filter(page => page > 0)
}

export function Pagination({
  totalCountOfRegisters,
  registersPerPage = 10,
  currentePage = 1,
  onPageChange
}: PaginationProps) {
  const lastPage = Math.floor(totalCountOfRegisters / registersPerPage)

  const previusPages = currentePage > 1
    ? generatePagesArray(currentePage - 1 - siblingsCount, currentePage - 1)
    : []

  const nextPages = currentePage < lastPage
    ? generatePagesArray(currentePage, Math.min(currentePage + siblingsCount, lastPage))
    : []

  return (
    <Stack
      direction={["column","row"]}
      spacing="6"
      mt="8"
      justify="space-between"
      align="center"
    >
      <Box>
        <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
      </Box>
      <Stack direction="row" spacing="2">

        {currentePage > (1 + siblingsCount) && (
          <>
            <PaginationItem onPageChange={onPageChange} number={1} />
            { currentePage > (2 + siblingsCount) &&
              <Text color="gray.300" width="8" textAlign="center">...</Text>}
          </>
        )}

        {previusPages.length > 0 && previusPages.map(page => {
          return <PaginationItem onPageChange={onPageChange} key={page} number={page} />
        })}

        <PaginationItem onPageChange={onPageChange} number={currentePage} isCurrent />

        {nextPages.length > 0 && nextPages.map(page => {
          return <PaginationItem onPageChange={onPageChange} key={page} number={page} />
        })}

        {(currentePage + siblingsCount) < lastPage && (
          <>
             { (currentePage + 1 + siblingsCount) < lastPage &&
              <Text color="gray.300" width="8" textAlign="center">...</Text>}
            <PaginationItem onPageChange={onPageChange} number={lastPage} />
          </>
        )}

      </Stack>

    </Stack>
  )
}
