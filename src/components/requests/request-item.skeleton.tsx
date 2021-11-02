import { 
    Skeleton, 
    Stack
} from '@mui/material'
import React from 'react'

const RequestItemSkeleton: React.FC = () => {
    return (
        <Stack direction="row" justifyContent="space-between" alignItems="center"
            sx={{
                padding: "8px 16px 8px 15px",
            }}
        >
            <Stack direction="row">
                <Skeleton 
                    variant="circular"
                    width={45}
                    height={45}
                />
                <Skeleton 
                    variant="text"
                    width={100}
                    sx={{
                        alignSelf: "center",
                        marginLeft: "16px",
                    }}
                />
            </Stack>
            <Stack direction="row">
                <Skeleton 
                    variant="rectangular"
                    width={25}
                    sx={{
                        marginRight: "12px",
                    }}
                />
                <Skeleton 
                    variant="rectangular"
                    width={25}
                />
            </Stack>
        </Stack>
    )
}

export default RequestItemSkeleton;